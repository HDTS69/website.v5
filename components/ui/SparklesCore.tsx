"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();
  
  useEffect(() => {
    // Check if we're on a mobile device
    setIsMobile(window.innerWidth < 768 || 
                'ontouchstart' in window || 
                navigator.maxTouchPoints > 0);
                
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      controls.start({ opacity: 1 });
    });
    
    // Add resize listener to adjust for orientation changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  const options = useMemo(() => ({
    background: {
      color: {
        value: background || "transparent",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
    },
    particles: {
      color: {
        value: particleColor || "#ffffff",
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: true,
        speed: isMobile ? (speed ? speed * 0.7 : 1.4) : (speed || 2),
        straight: false,
        warp: false,
      },
      number: {
        value: isMobile ? 
               (particleDensity ? Math.floor(particleDensity * 0.6) : 48) : 
               (particleDensity || 80),
        density: {
          enable: true,
          area: isMobile ? 600 : 800
        }
      },
      opacity: {
        value: { min: 0.3, max: 0.9 },
        animation: {
          enable: true,
          speed: isMobile ? 0.3 : 0.5,
          minimumValue: 0.3
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: minSize || 1, max: maxSize || 3 },
      },
    },
    detectRetina: true,
  }), [background, minSize, maxSize, speed, particleColor, particleDensity, isMobile]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn("w-full h-full", className)}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={async (container) => {
            if (container) {
              await controls.start({
                opacity: 1,
                transition: { duration: 0.2 }
              });
            }
          }}
          options={options}
        />
      )}
    </motion.div>
  );
}; 