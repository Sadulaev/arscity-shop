import React from 'react'
import ImageServicse1 from '../../../public/image 1201.png'
import ImageServicse2 from '../../../public/Mask Group.png'
import ImageServicse3 from '../../../public/image 12011.png'
import Image from 'next/image'


type Props = {}

const CompanyServices = (props: Props) => {


  return (
    <div className='w-[1370px] mx-auto flex gap-10 flex-col px-10 py-12 mt-14'>
        <h2 className='text-3xl font-bold'>УСЛУГИ КОМПАНИИ</h2>
        <div className='flex gap-10'>
            <div className='w-[760px] h-[520px] px-10 py-10 relative'>
                <Image 
                src='/image-1201.png'
                alt='services'
                layout='fill'
                className='-z-10'
                />
                <div className='flex flex-col items-centar gap-4 text-white bg-gray-400/50 p-4 w-[70%]'>
                  <h3 className='text-3xl uppercase'>Профессиональная укладка плитки и ламината</h3>
                  <span className='text-2xl'>Профессиональные мастера</span>
                </div>
            </div>
            <div className='w-[480px] flex flex-col justify-between'>
              <div className='relative w-[100%] h-[240px] p-4'>
                <Image 
                src='/Mask_Group.png'
                alt='imageServices'
                layout='fill'
                className='-z-10'
                />
                <div className='flex flex-col items-centar gap-4 text-white bg-gray-400/50 p-4 w-[70%]'>
                  <h3 className='text-2xl'>РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
                  <span className='text-2xl'>Профессиональные мастера</span>
                </div>
              </div>
              <div className='relative w-[100%] h-[240px]'>
                <Image 
                src='/Mask_Group.png'
                alt='imageServices'
                layout='fill'
                className='-z-10'
                />
                <div className='flex flex-col items-centar gap-4 text-white bg-gray-400/50 p-4 w-[70%]'>
                  <h3 className='text-2xl'>РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
                  <span className='text-2xl'>Профессиональные мастера</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyServices