'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const messages = [
  {
    text: "Buy now, pay later with Zip Pay - Interest free always",
    subtext: "Enjoy $350–$1,000 to spend instantly once approved",
    logo: "/images/payment-logos/Zip Logo copy.png"
  },
  {
    text: "Shop now with humm - Interest free payment plans",
    subtext: "Split your payments into easy weekly, fortnightly or monthly instalments",
    logo: "/images/payment-logos/Humm_PaymentTile_OrangeSmall copy.png"
  }
];

const PaymentPlansCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center space-x-8"
        >
          <div className="relative w-32 h-12">
            <Image
              src={messages[currentIndex].logo}
              alt="Payment Plan Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100px, 128px"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {messages[currentIndex].text}
            </h3>
            <p className="text-gray-300 text-lg">
              {messages[currentIndex].subtext}
            </p>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#00E6CA] w-6' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlansCarousel; 