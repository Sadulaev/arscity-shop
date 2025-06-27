'use client';
import { ArrowRight, Heart, Instagram, Menu, MenuIcon, PhoneCall, SearchIcon, ShoppingCart, User, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Dropdown from './Dropdown'
import CatalogModal from './catalog-modal'
import useClickOutside from '@/hooks/use-click-outside';
import logo from '../../../public/log.svg'
import Image from 'next/image';
import { useCartStore } from '../../../store/CartStore';
import { useFavorites } from '../../../store/AddToFavorites';
import { useSearchStore } from '../../../store/SearchStore';
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';



const Header = () => {   
    const [open, setOpen] = useState(false)
    const [widthScreen, setWidthScreen] = useState(1370)
    const [searchInput, setSearchInput] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    const { cartList } = useCartStore()
    const { favorites } = useFavorites()
    const {handleSearch} = useSearchStore()
    const fetchCart = useCartStore((state) => state.fetchCart)
    useClickOutside(ref, () => setOpen(false))
    const debounce = useDebounce(searchInput, 1000)
    const router = useRouter()

    useEffect(() => {
        setWidthScreen(window.innerWidth)
        handleSearch(debounce)
    }, [searchInput, debounce, widthScreen])
    
   const access_token = localStorage.getItem("access_token")
   useEffect(() => {
       fetchCart()
     }, [fetchCart])
    
  return (
    <header className='flex flex-col-reverse md:flex md:flex-row md:relative md:justify-between md:w-[1370px] md:h-[240px] md:mx-auto bg-white md:px-10 md:mt-8 z-30'>
        <div className='md:flex md:flex-col md:max-w-[803px] md:gap-10 md:relative'>
            <ul className='hidden md:flex md:gap-5 md:justify-between'>
                <li className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/logistics">Оплата и доставка</Link></li>
                <li className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/#new-collection">Новинки в коллекции</Link></li>
                <li className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/completed-work">Примеры работ</Link></li>
                <li className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="#">Обратная связь</Link></li>
                <li className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/#aboutref">О нас</Link></li>
            </ul>
            <div className='flex flex-col text-center pb-5 px-4 items-center  h-[250px] md:px-0 md:flex-row md:gap-5 md:items-center md:justify-between'>
                <Link href="/" className='group text-4xl font-bold flex items-center rounded-2xl p-2'>Ars<Image className='group-hover:translate-y-[-12px] group-hover:scale-110 transition-all duration-300' src={logo} width={80} height={80} alt='logo'/>City</Link>
                <span className="relative  inline-block md:w-[300px] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1">керамическая плитка и керамогранит в Чеченсокй Республике</span>
                <div className='flex mt-12 md:mt-0 gap-10 w-[100%] pr-10 md:pr-0 justify-end md:justify-center md:w-0'>
                    <Link href={`${access_token ? '/profile' : '/auth/login'}`}><User className='hover:scale-125 duration-150 cursor-pointer'/></Link>
                    <Link href="/favorites" className='relative'><Heart className='hover:scale-125 duration-150 cursor-pointer'/><span className='absolute text-red-500 -top-4 -right-2'>{favorites.length}</span></Link>
                    <Link href="/cart" className='relative'><ShoppingCart className='hover:scale-125 duration-150 cursor-pointer'/><span className='absolute text-red-500 -top-4 -right-2'>{cartList.length}</span></Link>
                    
                </div>
            </div>
            <div ref={ref} className='relative'>
                <Button
                onClick={() => setOpen(!open)}
                backgroundColor='bg-red-600'
                colorText='text-white'
                className={`hover:scale-110 px-5 left-5 bottom-2 md:left-5 duration-150 absolute md:bottom-2 md:top-[-30px] z-[1000] cursor-pointer`}
                text={`${widthScreen < 650 ? "КАТАЛОГ" : "КАТАЛОГ ПРОДУКЦИИ"}`}
                icon={<Menu />}
                widthScreen={widthScreen}
                />
                <CatalogModal open={open} setOpen={setOpen}/>
            </div>
            
            
        </div>
        <div className='flex flex-col bg-[#EEEEEE] pb-5 md:pb-0 md:bg-white gap-5 md:gap-[47px]'>
            <div className='flex justify-between px-4 pt-5 md:flex md:flex-row md:gap-[83px] md:items-center'>
                <div onClick={() => setShowMenu(true)} className='md:hidden lg:hidden cursor-pointer'>
                    <MenuIcon/>
                </div>
                <div className='flex flex-col gap-5'>
                    <Link target='blank' href="https://wa.me/79990019494" className="flex flex-row gap-3 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1">
                        <PhoneCall />
                        +7 999 001-94-94
                    </Link>
                    <span className="hidden md:flex md:flex-row md:gap-3 md:relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1 cursor-pointer">г. Урус-Мартан, ул. Нурдина Усамова 34</span>
                </div>
                
                <Instagram />
            </div>
            <div className='relative px-4 md:px-0'>
                <input 
                className='w-[100%] md:h-[50px]  text-white placeholder-text-black px-3 py-2 border rounded-[2px] border-gray-300 outline-none bg-red-500 focus:bg-white focus:text-black focus:border-2 focus:scale-105 transition-all delay-150' 
                type="text" 
                placeholder='искать в каталоге'
                onChange={(e) => {
                    setSearchInput(e.target.value)
                    if (e.target.value.length) {
                        router.push("/products/search")
                    }
                }}
                />
                <ArrowRight className='absolute top-[30%] w-[20px] h-[20px] right-6 md:right-[20px] cursor-pointer' color='black'/>
            </div>
        </div>


        <div onClick={() => setShowMenu(false)} className={`md:hidden lg:hidden ${showMenu ? "left-0" : "left-[-100vw]"} absolute top-0 w-screen h-screen bg-gray-400/50 flex items-start transition-all duration-200 z-[1000]`}>
            <ul onClick={(e) => e.stopPropagation()} className='flex flex-col items-center w-[50%] pt-10 bg-white h-[100%] gap-5'>
                <li onClick={() => setShowMenu(false)} className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/logistics">Оплата и доставка</Link></li>
                <li onClick={() => setShowMenu(false)} className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/#new-collection">Новинки в коллекции</Link></li>
                <li onClick={() => setShowMenu(false)} className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/completed-work">Примеры работ</Link></li>
                <li onClick={() => setShowMenu(false)} className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="#">Обратная связь</Link></li>
                <li onClick={() => setShowMenu(false)} className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1"><Link href="/#aboutref">О нас</Link></li>
            </ul>
            <X onClick={() => setShowMenu(false)} className='absolute top-2 left-[42%]'/>
        </div>


    </header>
  )
}

export default Header


