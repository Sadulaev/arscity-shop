import React from 'react'
import Button from '../ui/Button'
import { ArrowUp, Instagram, Menu, PhoneCall } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-[1370px] h-[320px] mx-auto mt-10 px-12 pt-10 flex justify-between border-2'>
        <div className='flex flex-col justify-between'>
            <Button
            backgroundColor='bg-red-600'
            colorText='text-white'
            className='hover:scale-110 duration-150 z-[1000] -mt-20'
            text='КАТАЛОГ ПРОДУКЦИИ'
            icon={<Menu />}
            />
            <h2 className='text-3xl'>ArsCity</h2>
            <span className='text-gray-500'>керамическая плитка и керамогранит <br /> в Чеченской республике</span>
            <div className='flex items-center gap-5'>
              <Instagram/>
              <span>ArsCity</span>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl'>интернет-магазин</h2>
          <div className='flex flex-col gap-3 text-gray-700'>
            <span>Каталог</span>
            <span>Оплата и доставка</span>
            <span>Акции</span>
            <span>Полезные советы</span>
            <span>Контакты</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl'>услуги компании</h2>
          <div className='flex flex-col gap-3 text-gray-700'>
            <span>Выезд на замер</span>
            <span>Расчет материалов</span>
            <span>Резка</span>
            <span>Изготовление спец.изделий</span>
            <span>3D-проект (дизайн)</span>
          </div>
        </div>
        <div className='flex flex-col justify-between h-[100%]'>
          <div className='flex gap-4'>
            <PhoneCall/>
            <span>+7 928 004-94-94</span>
          </div>
          <div className='flex justify-between gap-10'>
            <Image src='/iconCard3.png' width={60} height={19} alt='iconcard' objectFit='cover'/>
            <Image src='/iconCard2.png' width={52} height={31} alt='iconcard'/>
            <Image src='/iconCard1.png' width={66} height={19} alt='iconcard'/>
          </div>
          <Button
          backgroundColor='bg-gray-400'
          colorText='text-white'
          className='hover:scale-110 duration-150 z-[1000] uppercase w-[250px] h-[65px]'
          text='Наверх страницы'
          icon={<ArrowUp />}
          />
        </div>
    </div>
  )
}

export default Footer