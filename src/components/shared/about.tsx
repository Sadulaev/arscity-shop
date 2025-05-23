import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-[1370px] px-10 mx-auto flex gap-[63px] mt-10'>
        <div className='flex flex-col gap-[80px] w-[480px]'>
            <h2 className='text-3xl uppercase font-bold'>О нашем магазине</h2>
            <p className='text-gray-500 flex flex-col gap-4'>
                <span>В каталоге нашего интернет-магазина более 570 коллекций керамической плитки и керамогранита от лучших производителей России и Европы.
                В наличии имеются эксклюзивные бренды, которые вы не найдете в других магазинах Иркутска.</span>
                <span>
                    Вся продукция оригинальная от производителей по установленной заводом цене.
                <br />Услуги для вашего удобства: резка плитки, выезд на замер и расчет материалов. При покупке плитки дарим дизайн-проект вашего помещения в подарок. 
                Возможна доставка плитки в день заказа.
                </span>
            </p>
        </div>
        <div className='flex gap-10'>
            <Image
            src='/imageAbout.webp'
            alt='image'
            width={320}
            height={400}
            objectFit='cover'
            />
            <div className='flex flex-col gap-10'>
                <Image
                src='/image113.png'
                alt='image'
                width={360}
                height={190}
                />
                <Image
                src='/image114.png'
                alt='image'
                width={360}
                height={190}
                />
            </div>
        </div>
    </div>
  )
}

export default About