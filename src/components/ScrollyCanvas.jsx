import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const TOTAL_FRAMES = 74; // 0 to 89

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive frame URLs exactly as they exist in public/sequence
  const frameUrls = useMemo(() => {
    return Array.from({ length: TOTAL_FRAMES }).map(
      (_, i) => `/sequence/frame_${i.toString().padStart(2, '0')}_delay-0.066s.webp`
    );
  }, []);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgCache = [];

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        imgCache[index] = img;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(imgCache);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame: ${url}`);
        // Increment anyways to avoid getting stuck forever
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(imgCache);
          setIsLoaded(true);
        }
      };
    });
  }, [frameUrls]);

  // Framer Motion scroll and tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001
  });

  const currentFrameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let renderFrameId;

    const render = () => {
      const frame = Math.floor(currentFrameIndex.get());
      const image = images[frame];

      if (image && image.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = image.width / image.height;
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      }
      
      renderFrameId = requestAnimationFrame(render);
    };

    renderFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(renderFrameId);
  }, [isLoaded, images, currentFrameIndex]);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        // Adjust for high DPI displays if needed (leaving standard for now)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 transition-opacity duration-1000">
            <span className="text-white text-sm tracking-widest uppercase opacity-70 animate-pulse">Loading Sequence...</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
        />
        <Overlay scrollProgress={smoothProgress} />
      </div>
    </div>
  );
}
