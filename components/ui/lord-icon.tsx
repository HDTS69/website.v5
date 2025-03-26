import lottie from "lottie-web";
import { useEffect, useRef } from "react";

interface LordIconProps {
  src: string;
  trigger?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
  size?: number;
  className?: string;
}

export function LordIcon({
  src,
  trigger = "hover",
  colors = {
    primary: "#00E6CA",
    secondary: "#00E6CA",
  },
  size = 64,
  className,
}: LordIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: trigger === "loop",
      autoplay: trigger === "loop",
      path: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    if (colors) {
      const colorPaths = animationRef.current.animationData.layers.map((layer: any) => {
        if (layer.shapes) {
          return layer.shapes.map((shape: any) => {
            if (shape.it) {
              return shape.it.map((item: any) => {
                if (item.c?.k) {
                  const [r, g, b] = item.c.k;
                  // Convert RGB to hex
                  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
                  if (hex === "#0A0A0A") {
                    item.c.k = hexToRgb(colors.primary);
                  } else if (hex === "#000000") {
                    item.c.k = hexToRgb(colors.secondary);
                  }
                }
                return item;
              });
            }
            return shape;
          });
        }
        return layer;
      });
    }

    if (trigger === "hover") {
      const container = containerRef.current;
      container.addEventListener("mouseenter", () => {
        animationRef.current?.play();
      });
      container.addEventListener("mouseleave", () => {
        animationRef.current?.stop();
      });
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, [src, trigger, colors]);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
} 