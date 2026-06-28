import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const [value, setValue] = useState(0);

  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        let start = null;

        // Apple-like Ease Out Cubic
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = (timestamp) => {
          if (!start) start = timestamp;

          const progress = Math.min((timestamp - start) / duration, 1);

          const eased = easeOutCubic(progress);

          const current = eased * end;

          setValue(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.45,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span
        ref={ref}
        className="tabular-nums"
    >
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}