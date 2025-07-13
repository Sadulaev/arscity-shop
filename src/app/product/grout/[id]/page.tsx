'use client';
import { ArrowLeft, ArrowRight, CreditCard, ImageOff, Landmark, Wallet } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Services from '@/components/shared/services'
import axios from 'axios'
import { useCartStore } from '../../../../../store/CartStore'; 
import { useFavorites } from '../../../../../store/AddToFavorites'; 
import Breadcrumbs from '@/components/shared/breadcrumbs';
import { GroutsType } from '@/app/products/grouts/page';
import config from '@/utils/config';

const Grout = () => {

    const [grout, setGrout] = useState<GroutsType>()
    const { addToCart, cartList, removeFromCart } = useCartStore()
    const [quantity, setQuantity] = useState(1)
    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const scrollRef = useRef<HTMLDivElement>(null)
    const [indexGrout, setIndexGrout] = useState(0)
    const isInFavorites = favorites.some(fav => fav.object_id === grout?.id && fav.content_type_display === "grout")
    const isInCart = cartList.some(item => item.content_type_display === 'grout' && item.object_id === grout?.id)


    useEffect(() => {
        const id = window.location.pathname.split("/").pop()
        try {
            const fetchData = async () => {
                const response = await axios.get(`${config.BASE_URL}/api/tile/grouts/${id}`)
                setGrout(response.data)
            }
            fetchData()
        } catch (error) {
            console.log(error);

        }
    }, [])

    
    const handleFavoriteToggle = () => {
        const ct = favorites.filter(item => item.object_id === grout?.id && item.content_type_display === "grout")
        if (isInFavorites) {
            removeFavorite(ct[0].id)
        } else {
            if (grout?.id) {
                addFavorite("grout", grout?.id)
            }
        }
    }

    
    const removeId = useMemo(() => {
        if (cartList) {
            return (
                cartList.find(item => item.content_type_display === "grout")?.id
            )
        }
    }, [cartList.length])
    

    const toggleToCart = () => {
        
        if (!isInCart && grout?.id) {
            addToCart('grout', grout?.id, quantity)
        } else {
            removeFromCart(removeId!)
        }
    }


    const scrollLeft = () => {
            if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: "smooth" })
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: "smooth" })
        }
    }

    const imagesArr = useMemo(() => {
        if(!grout) {
            return Array(5).fill('');
        }
        return [ grout.image1, grout.image2, grout.image3, grout.image4, grout.image5 ];

    }, [grout?.id, !!grout])

if (!grout) return null


    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs
                name={"Подложка"}
                title={grout.name}
                handleFavoriteToggle={handleFavoriteToggle}
                isInFavorites={isInFavorites}
            />
            <div className='flex flex-col justify-between gap-10 w-screen md:w-[1370px] mx-auto px-10 md:px-12'>
                <div className='flex flex-col md:flex-row gap-6 md:justify-between md:items-start'>
                    <div className='relative flex flex-col items-center bg-[#F6F6F6]'>
                        <div className='flex overflow-hidden justify-center md:w-[666px] md:h-[580px]'>
                            <Image 
                                src={imagesArr[indexGrout]} 
                                width={666}
                                height={400}
                                alt='Imagelaminate'
                                className='object-contain'
                            />
                        </div>
                        <div className="py-5 flex gap-4 items-center">
                            <button
                                onClick={scrollLeft}
                                className="flex items-center justify-center w-[40px] bg-gray-400 h-[103px] text-red-500 hover:scale-110 transition-all duration-200"
                            >
                                <ArrowLeft />
                            </button>
                            <div
                                ref={scrollRef}
                                className="w-full flex overflow-x-auto scroll-hidden"
                            >
                                <div className="inline-flex gap-4">
                                    {Array(5)
                                        .fill("")
                                        .map((_, index) => {
                                            if(!imagesArr[index]) return 
                                            <div 
                                                key={index}
                                                className='pointer-events-none flex items-center justify-center w-[130px] h-[103px] border'><ImageOff/>
                                            </div>;
                                            return <div
                                                key={index}
                                                onClick={() =>
                                                    setIndexGrout(
                                                        index
                                                    )
                                                }
                                                className={`relative flex items-center justify-between w-[130px] h-[103px] cursor-pointer${
                                                    index + 1 !==
                                                    indexGrout
                                                        ? "bg-gray-300"
                                                        : ""
                                                }`}
                                            >
                                                <Image
                                                    fill
                                                    src={
                                                        imagesArr[index]
                                                    }
                                                    alt="imageSlide"
                                                    className='cursor-pointer'
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <button
                                onClick={scrollRight}
                                className="flex items-center justify-center w-[40px] bg-gray-400 h-[103px] text-red-500 hover:scale-110 transition-all duration-200"
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between md:w-[45%] h-[500px] pr-2'>
                        <div className='flex gap-4 md:gap-10 items-end mt-8'>
                            <div className='relative flex items-center justify-center w-[330px] h-[147px] border border-gray-400 '>
                                <span className='uppercase text-3xl text-blue-500 bold'>ARS-CITY</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-4 md:mb-0 gap-5 mt-10'>
                            <div className='flex justify-between px-3 py-1 md:h-15 md:text-2xl bg-[#E9E9E9] w-[50%]'>
                                <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} className='w-15 cursor-pointer bg-white'>-</button>
                                <input onChange={(e) => setQuantity(+e.target.value)} type="text" value={quantity} className='focus:outline-none w-20 text-center' />
                                <button onClick={() => setQuantity(prev => prev + 1)} className='w-15 cursor-pointer bg-white'>+</button>
                            </div>
                            <div className='md:text-2xl flex justify-between px-3 py-1 md:h-15 bg-[#E9E9E9] w-[25%]'>
                                <button className='w-[55px] bg-white'>м²</button>
                                <button className='w-[55px] bg-white hidden'>шт.</button>
                            </div>
                        </div>
                        <div className='flex gap-4 mb-4 md:mb-0 md:text-2xl'>
                            <span>Итоговая цена: </span>
                            <span>{grout.price * quantity} руб.</span>
                            <span>Цвет: {grout.color}</span>
                        </div>
                        <div className='flex flex-col md:flex-row mb-4 md:mb-0 gap-3 items-center justify-between w-[100%] text-red-500'>
                            <button onClick={toggleToCart} className='border-2 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-200 py-2 px-10 w-[100%] md:w-[50%]'>{!isInCart ? "+  добавить в корзину" : "Удалить из корзины"}</button>
                        
                        </div>
                        <div className='md:flex items-center gap-2 justify-between'>
                            <div>Оплата: </div>
                            <div className='flex gap-1'>
                                <Wallet color="#ee1b1b" strokeWidth={1} />
                                <span>наличные</span>
                            </div>
                            <div className='flex gap-1'>
                                <CreditCard color="#ee1b1b" strokeWidth={1} />
                                <span>карта</span>
                            </div>
                            <div className='flex gap-1'>
                                <Landmark color="#ee1b1b" strokeWidth={1} />
                                <span>банковский перевод</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Services />
        </div>
    )
}

export default Grout