import React, { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 99;

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Generate frame paths
  const frameUrls = useMemo(() => {
    return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return `/sequence/frame_${String(i + 1).padStart(3, "0")}.jpg`;
    });
  }, []);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = new Array(TOTAL_FRAMES);

    frameUrls.forEach((url, index) => {
      const img = new Image();

      img.src = url;

      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;

        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };

      img.onerror = () => {
        console.error("Failed:", url);
      };
    });
  }, [frameUrls]);

  // Resize canvas
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    mass: 0.5,
  });

  // Convert progress to frame index
  const currentFrame = useTransform(
    smoothProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Draw only when frame changes
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let previousFrame = -1;

    const unsubscribe = currentFrame.on("change", (value) => {
      const frame = Math.floor(value);

      if (frame === previousFrame) return;

      previousFrame = frame;

      const image = images[frame];

      if (!image) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgRatio = image.width / image.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth;
      let drawHeight;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
      }

      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;

      ctx.drawImage(image, x, y, drawWidth, drawHeight);
    });

    return () => unsubscribe();
  }, [loaded, images, currentFrame]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <p className="text-white tracking-widest animate-pulse">
              Loading...
            </p>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />

        <Overlay scrollProgress={smoothProgress} />
      </div>
    </div>
  );
}