'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BigSliderSceleton from './big-slider-sceleton';
import Image from 'next/image';
import config from '@/utils/config';

type Slide = {
  image: string;
  title: string;
  description: string;
}

const BigSlider = () => {
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const fetchSlides = async () => {
      const { data } = await axios.get(`${config.BASE_URL}/api/tile/slider/`,)
      setSlides(data)
    }
    fetchSlides()
  }, [])

  useEffect(() => {
    if (slides.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides])

  if (slides.length === 0) return <BigSliderSceleton/>

  return (
    <div className="overflow-hidden relative h-[360px] md:h-screen md:min-h-screen -mt-20 z-10">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          width: `${(slides.length + 1) * 100}vw`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-[460px] md:h-screen relative">
            <Image fill src={slide.image} className="w-full h-full object-contain md:object-cover absolute" alt={`Slide ${index}`} />
            <div className="absolute flex md:gap-10 top-1/4 md:bottom-[50%] md:left-[100px] text-white p-4 bg-gray-600 opacity-[0.7]">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-[1.5rem] md:text-5xl font-bold">{slide.title}</h1>
                    <p className="text-xl">{!showText ? slide.description.slice(0,50) : slide.description}...<span onClick={() => setShowText(!showText)} className='text-blue-300 cursor-pointer'>{!showText ? "еще" : "скрыть"}</span></p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BigSlider