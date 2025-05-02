'use client';

import Image from 'next/image';

interface PaymentIconProps {
  type: 'bnpl' | 'cards' | 'tap';
}

export function PaymentIcons({ type }: PaymentIconProps) {
  if (type === 'bnpl') {
    return (
      <>
        <div className="flex items-center h-[25px]">
          <Image 
            src="/Payment Options/Humm_PaymentTile_OrangeSmall copy.png" 
            alt="Humm" 
            width={70} 
            height={25} 
            style={{ width: 'auto', height: '25px' }}
            className="object-contain"
          />
        </div>
        <div className="flex items-center h-[25px]">
          <Image 
            src="/Payment Options/Zip Logo copy.png" 
            alt="Zip" 
            width={50} 
            height={25} 
            style={{ width: 'auto', height: '25px' }}
            className="object-contain"
          />
        </div>
      </>
    );
  }

  if (type === 'cards') {
    return (
      <>
        <div className="flex items-center h-[30px]">
          <Image 
            src="/Payment Options/visa.png" 
            alt="Visa" 
            width={55} 
            height={35} 
            style={{ width: 'auto', height: '30px' }}
            className="object-contain"
          />
        </div>
        <div className="flex items-center h-[30px]">
          <Image 
            src="/Payment Options/mastercard.png" 
            alt="Mastercard" 
            width={55} 
            height={35} 
            style={{ width: 'auto', height: '30px' }}
            className="object-contain"
          />
        </div>
        <div className="flex items-center h-[30px]">
          <Image 
            src="/Payment Options/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700_result.png" 
            alt="Amex" 
            width={55} 
            height={35} 
            style={{ width: 'auto', height: '30px' }}
            className="object-contain"
          />
        </div>
      </>
    );
  }

  if (type === 'tap') {
    return (
      <div className="flex items-center h-[30px]">
        <Image 
          src="/Payment Options/apple-pay copy_result.png" 
          alt="Apple Pay" 
          width={70} 
          height={35} 
          style={{ width: 'auto', height: '30px' }}
          className="object-contain brightness-200"
        />
      </div>
    );
  }

  return null;
} 