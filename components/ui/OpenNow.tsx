'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function OpenNow() {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenTime, setNextOpenTime] = useState<string>('');

  const businessHours = {
    0: { open: '00:00', close: '23:59' }, // Sunday - 24/7
    1: { open: '00:00', close: '23:59' }, // Monday - 24/7
    2: { open: '00:00', close: '23:59' }, // Tuesday - 24/7
    3: { open: '00:00', close: '23:59' }, // Wednesday - 24/7
    4: { open: '00:00', close: '23:59' }, // Thursday - 24/7
    5: { open: '00:00', close: '23:59' }, // Friday - 24/7
    6: { open: '00:00', close: '23:59' }, // Saturday - 24/7
  };

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      
      const todayHours = businessHours[day as keyof typeof businessHours];
      
      // Since we're 24/7, always set to open
      setIsOpen(true);
      setNextOpenTime('24/7 Emergency Service');
    };

    // Check initially
    checkOpenStatus();

    // Check every minute
    const interval = setInterval(checkOpenStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-[#00E6CA]" />
      <span className="text-sm font-medium">
        {isOpen ? (
          <span className="text-[#00E6CA]">Open Now</span>
        ) : (
          <span className="text-gray-400">
            Opens {nextOpenTime}
          </span>
        )}
      </span>
    </div>
  );
} 