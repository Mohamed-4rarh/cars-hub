"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

export default function CustomButton({title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) {
  return (
    <button disabled={false} type={btnType || 'button'} className={`custom-btn ${containerStyles} ${textStyles}`} onClick={handleClick}>
      <p className='flex-1'>{title}</p>
      {
        rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon} alt='right icon' fill className='object-contain flex-1' />
          </div>
        )
      }
    </button>
  )
}
