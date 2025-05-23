'use client';
import { ArrowRight, Heart, Instagram, Menu, PhoneCall, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Dropdown from './Dropdown'
import CatalogModal from './catalog-modal'
import useClickOutside from '@/hooks/use-click-outside';


type Props = {}

const Header = (props: Props) => {   
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    useClickOutside(ref, () => setOpen(false))
    
  return (
    <header className='flex justify-between w-[1370px] h-[240px] mx-auto bg-white px-10 py-12 z-[1000]'>
        <div className='flex flex-col max-w-[803px] gap-10 relative'>
            <ul className='flex gap-6 justify-between'>
                <Dropdown title='Услуги' options={[
                    {option: "Услуга 1", link: 'link1'},
                    {option: "Услуга 2", link: 'link2'},
                    {option: "Услуга 3", link: 'link3'},
                    {option: "Услуга 44", link: 'link44'},
                ]}/>
                <li><Link href="#">Оплата и доставка</Link></li>
                <li><Link href="#">Акции</Link></li>
                <li><Link href="#">Полезные советы</Link></li>
                <li><Link href="#">Обратная связь</Link></li>
                <li><Link href="#">Контакты</Link></li>
            </ul>
            <div className='flex g-5 items-center justify-between'>
                <h2 className='text-4xl'><span>A</span>rsCity</h2>
                <span>керамическая плитка и керамогранит <br /> в Чеченсокй Республике</span>
                <div className='flex gap-10'>
                    <User className='hover:scale-125 duration-150 cursor-pointer'/>
                    <Heart className='hover:scale-125 duration-150 cursor-pointer'/>
                    <ShoppingCart className='hover:scale-125 duration-150 cursor-pointer'/>
                </div>
            </div>
            <div ref={ref} className='relative'>
                <Button
                onClick={() => setOpen(!open)}
                backgroundColor='bg-red-600'
                colorText='text-white'
                className='hover:scale-110 duration-150 absolute top-[0px] z-[1000] cursor-pointer'
                text='КАТАЛОГ ПРОДУКЦИИ'
                icon={<Menu />}
                />
                <CatalogModal open={open} setOpen={setOpen}/>
            </div>
            
            
        </div>
        <div className='flex flex-col gap-[47px]'>
            <div className='flex flex-row gap-[83px] items-center'>
                <div className='flex flex-col gap-5'>
                    <Link href="#" className='flex flex-row gap-3'>
                        <PhoneCall />
                        +7 928 004-94-94
                    </Link>
                    <span>г. Урус-Мартан, ул. Нурдина Усамова 34</span>
                </div>
                
               
                <Instagram />
            </div>
            <div className='relative text-white'>
                <input className='w-[385px] h-[50px] text-white px-3 py-2 border rounded-[2px] border-gray-300 outline-none bg-neutral-400 opacity-50' type="text" placeholder='искать в каталоге'/>
                <ArrowRight className='absolute top-[30%] w-[20px] h-[20px] right-[30px] text-red-600'/>
            </div>
        </div>
    </header>
  )
}

export default Header