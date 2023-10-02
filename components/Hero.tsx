"use client"

import React from 'react'
import Image from 'next/image'
import  CustomButton  from './CustomButton'

export default function Hero() {
  function handleScroll () {

  }
  return (
    <div className='hero'>
      <div className='flex-1 padding-x pt-36'>
        <h1 className='hero__title capitalize'>
          find, book, or rent a car, Quickly and easily
        </h1>
        <p className='hero__subtitle'>
          streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill className=' object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}
