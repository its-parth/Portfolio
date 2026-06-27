import React, { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 83;

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);    // Start fade animation

  const [showLoader, setShowLoader] = useState(true);

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

  setLoadingProgress(
    Math.floor((loadedCount / TOTAL_FRAMES) * 100)
  );

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

useEffect(() => {
  const interval = setInterval(() => {
    setDisplayProgress((prev) => {
      if (prev >= loadingProgress) return prev;

      return Math.min(prev + 1, loadingProgress);
    });
  }, 20);

  return () => clearInterval(interval);
}, [loadingProgress]);

useEffect(() => {
  if (!loaded || displayProgress < 100) return;

  // Wait before starting the fade
  const fadeTimer = setTimeout(() => {
    setIsFading(true);
  }, 800);

  // Remove loader after fade animation completes
  const removeTimer = setTimeout(() => {
    setShowLoader(false);
  }, 1800);

  return () => {
    clearTimeout(fadeTimer);
    clearTimeout(removeTimer);
  };
}, [loaded, displayProgress]);

  // Resize canvas
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const dpr = window.devicePixelRatio || 1;

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

  const drawFrame = (frame) => {
    const image = images[frame];

    if (!image) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const imgRatio = image.width / image.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth;
    let drawHeight;

    if (imgRatio > canvasRatio) {
      // Image is wider
      drawHeight = canvas.height;
      drawWidth = drawHeight * imgRatio;

      // Ensure width covers canvas
      if (drawWidth < canvas.width) {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
      }
    } else {
      // Image is taller
      drawWidth = canvas.width;
      drawHeight = drawWidth / imgRatio;

      // Ensure height covers canvas
      if (drawHeight < canvas.height) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
      }
    }
    const x = (canvas.width - drawWidth) / 2;

    const y = (canvas.height - drawHeight) / 2;

    ctx.drawImage(image, x, y, drawWidth, drawHeight);
  };

  // ⭐ Draw first frame immediately
  drawFrame(0);

  let previousFrame = 0;

  const unsubscribe = currentFrame.on("change", (value) => {
    const frame = Math.floor(value);

    if (frame === previousFrame) return;

    previousFrame = frame;

    drawFrame(frame);
  });

  return () => unsubscribe();
}, [loaded, images, currentFrame]);

  const getLoadingText = () => {
  if (displayProgress < 30) return "Initializing";
  if (displayProgress < 60) return "Loading Assets";
  if (displayProgress < 90) return "Preparing Experience";
  return "Ready";
};

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative h-[500vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {showLoader && (
  <div
    className={`absolute inset-0 z-[200] bg-black flex items-center justify-center transition-opacity duration-1000 ${
      isFading
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
  >
    <div className="text-center select-none">

      {/* Brand */}
      <h1 className="text-5xl md:text-7xl font-semibold tracking-[0.35em] text-white">
        PARTH
      </h1>

      {/* Status */}
      <p className="mt-8 uppercase tracking-[0.45em] text-neutral-500 text-xs md:text-sm">
        {getLoadingText()}
      </p>

      {/* Progress Bar */}
      <div className="mt-10 w-72 md:w-96 h-[2px] rounded-full bg-white/10 overflow-hidden mx-auto">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${displayProgress}%`,
          }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-6 text-3xl md:text-4xl font-light tracking-wider">
        {displayProgress}%
      </div>

    </div>
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