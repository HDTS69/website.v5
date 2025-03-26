'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { EmergencyServicesCard } from '@/components/ui/EmergencyServicesCard';

export function HomeEmergencySection() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref}
      className="py-16 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0]
              }
            }
          }}
        >
          <div className="max-w-5xl mx-auto">
            <EmergencyServicesCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 