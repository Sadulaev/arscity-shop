import Image from 'next/image'
import React from 'react'
import trucksvg from '../../../public/truck.svg'
import cuttingTiles from '../../../public/codepen.svg'
import layers from '../../../public/layers.svg'
import cube from '../../../public/Group.svg'

const Services = () => {
  return (
    <div className='flex flex-col px-10 gap-10 md:flex md:flex-row md:items-center md:justify-between md:w-[1370px] md:gap-[65px] md:mx-auto mt-14 md:px-12'>
        <div className='flex gap-[35px] items-center'>
            <Image src={trucksvg} alt='icon' width={52} height={43}/>
            <div>
                <h3>удобная доставка
                по Чеченской республике</h3>
                <span className='text-gray-400'>в день покупки</span>
            </div>
        </div>
        <div className='flex gap-[35px] items-center'>
            <Image src={cuttingTiles} alt='icon' width={52} height={43}/>
            <div>
                <h3>резка плитки
                и керамогранита</h3>
                <span className='text-gray-400'>под ваш проект</span>
            </div>
        </div>
        <div className='flex gap-[35px] items-center'>
            <Image src={layers} alt='icon' width={52} height={43}/>
            <div>
                <h3>монтаж плитки и укладка ламината
                на вашем объекте</h3>
                <span className='text-gray-400'>под ключ</span>
            </div>
        </div>
        <div className='flex gap-[35px] items-center'>
            <Image src={cube} alt='icon' width={52} height={43}/>
            <div>
                <h3>3D дизайн-проект
                в подарок</h3>
                <span className='text-gray-400'>при покупке плитки</span>
            </div>
        </div>
    </div>
  )
}

export default Services