'use client';
import React from 'react'
import ImageServicse1 from '../../../public/image 1201.png'
import ImageServicse2 from '../../../public/Mask Group.png'
import ImageServicse3 from '../../../public/image 12011.png'
import Image from 'next/image'


type Props = {}

const CompanyServices = (props: Props) => {

  const widthScreen = window.innerWidth

  return (
    <div className='md:w-[1370px] mx-auto  md:text-white flex gap-10 flex-col md:px-10 py-12 mt-14'>
        <h2 className='text-3xl text-black px-10 font-bold'>УСЛУГИ КОМПАНИИ</h2>
        <div className='flex flex-col md:flex md:flex-row gap-10'>
            <div className='w-[400px] h-[100px] flex items-center gap-10 md:block md:w-[760px] md:h-[520px] px-8 md:py-10 relative'>
              {widthScreen > 650 ? (
                <Image 
                  src='/image-1201.png'
                  alt='services'
                  layout='fill'
                  className='-z-10'
                />
              ) : (
                <Image 
                  src='/image-1201.png'
                  alt='services'
                  width={100}
                  height={100}
                  className='-z-10'
                />
              )}
              
              <div className='flex flex-col items-centar gap-2 md:gap-4  md:bg-gray-400/50 md:p-4 md:w-[70%]'>
                <h3 className='text-[0.7rem] md:text-3xl uppercase'>Профессиональная укладка плитки и ламината</h3>
                <span className='text-[0.7rem] text-gray-400 md:text-2xl md:text-white uppercase'>Профессиональные мастера</span>
              </div>
            </div>
            <div className='w-[400px] md:w-[480px] flex flex-col gap-10 uppercase justify-between'>
              <div className='relative flex gap-10 items-center md:block w-[100%] h-[150px] md:h-[240px] px-8 md:px-0 md:p-4'>
                {widthScreen > 650 ? (
                  <Image 
                    src='/Mask_Group.png'
                    alt='imageServices'
                    layout='fill'
                    className='-z-10'
                  />
                ) : (
                  <Image 
                    src='/Mask_Group.png'
                    alt='imageServices'
                    width={100}
                    height={150}
                    className='-z-10'
                  />
                )}
                
                <div className='flex flex-col items-centar md:gap-4 text-black md:text-white md:bg-gray-400/50 md:p-4 md:w-[70%]'>
                  <h3 className='text-[0.7rem] md:text-2xl'>РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
                  <span className='text-[0.7rem] text-gray-400 md:text-white md:text-2xl'>Профессиональные мастера</span>
                </div>
              </div>
              <div className='relative flex gap-10 items-center md:block w-[100%] h-[150px] md:h-[240px] px-8 md:px-0 md:p-4'>
                {widthScreen > 650 ? (
                  <Image 
                    src='/Mask_Group.png'
                    alt='imageServices'
                    layout='fill'
                    className='-z-10'
                  />
                ) : (
                  <Image 
                    src='/Mask_Group.png'
                    alt='imageServices'
                    width={100}
                    height={150}
                    className='-z-10'
                  />
                )}
                
                <div className='flex flex-col items-centar md:gap-4 text-black md:text-white md:bg-gray-400/50 md:p-4 md:w-[70%]'>
                  <h3 className='text-[0.7rem] md:text-2xl'>РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
                   <span className='text-[0.7rem] text-gray-400 md:text-white md:text-2xl'>Профессиональные мастера</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyServices