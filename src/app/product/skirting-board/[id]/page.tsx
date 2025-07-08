'use client';
import { CreditCard, Landmark, Wallet } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import Services from '@/components/shared/services'
import axios from 'axios'
import { useCartStore } from '../../../../../store/CartStore';
import { useFavorites } from '../../../../../store/AddToFavorites';
import { SkirtingBoardTYpe } from '@/app/products/skirting-board/page';
import Breadcrumbs from '@/components/shared/breadcrumbs';
import config from '@/utils/config';

const Skirtingboard = () => {

    const [scirtingboard, setScirtingboard] = useState<SkirtingBoardTYpe>()
    const { addToCart, cartList, removeFromCart } = useCartStore()
    const [quantity, setQuantity] = useState(1)
    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const isInFavorites = favorites.some(fav => fav.object_id === scirtingboard?.id && fav.content_type_display === "skirtingboard")
    const isInCart = cartList.some(item => item.content_type_display === 'skirtingboard' && item.object_id === scirtingboard?.id)


    useEffect(() => {
        const id = window.location.pathname.split("/").pop()
        try {
            const fetchData = async () => {
                const response = await axios.get(`${config.BASE_URL}/api/laminate/skirting-boards/${id}`)
                setScirtingboard(response.data)
            }
            fetchData()
        } catch (error) {
            console.log(error);

        }
    }, [])

    
    const handleFavoriteToggle = () => {
        const ct = favorites.filter(item => item.object_id === scirtingboard?.id && item.content_type_display === "skirtingboard")
        if (isInFavorites) {
            removeFavorite(ct[0].id)
        } else {
            if (scirtingboard?.id) {
                addFavorite("skirtingBoard", scirtingboard?.id)
            }
        }
    }

    
    const removeId = useMemo(() => {
        if (cartList) {
            return (
                cartList.find(item => item.content_type_display === "skirtingboard")?.id
            )
        }
    }, [cartList.length])
    

    const toggleToCart = () => {
        
        if (!isInCart && scirtingboard?.id) {
            addToCart('skirtingBoard', scirtingboard?.id, quantity)
        } else {
            removeFromCart(removeId!)
        }
    }


    if (!scirtingboard) return null


    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs 
                name={"Плинтус"}
                title={scirtingboard.name}
                handleFavoriteToggle={handleFavoriteToggle}
                isInFavorites={isInFavorites}
            />
            <div className='flex flex-col justify-between gap-10 w-screen md:w-[1370px] mx-auto px-10 md:px-12'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='relative flex bg-[#F6F6F6] md:w-[666px] md:h-[480px]'>
                        <Image 
                        src={scirtingboard.image1 || ""} 
                        width={666} 
                        height={480} 
                        alt='Imagescirtingboard'
                        className='object-contain'
                        />
                        <div className='absolute top-3 -right-5 py-2 px-3.5 bg-red-500 text-white'>
                            <span className='relative after:content-[""] after:absolute after:top-[30px] after:-right-[14px] after:border-t-[10px] after:border-r-[20px] after:border-t-[#6D6D6D] after:border-r-transparent'>скидка 30%</span>
                        </div>

                    </div>

                    <div className='flex flex-col justify-between md:w-[45%] h-[500px] pr-2'>
                        {/* <span>Артикул: 5758753287542</span> */}
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
                            <span>{scirtingboard.price * quantity} руб.</span>
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
                <div className='flex flex-col md:flex-row justify-between  w-[100%] px-10 py-10 my-14 bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Тип плинтуса:</span>
                            <span>{scirtingboard?.type}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Толщина плинтуса</span>
                            <span>{scirtingboard?.thickness}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Высота плинтуса</span>
                            <span>{scirtingboard?.height} см</span>
                        </div>
                        
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Влагостойкоость:</span>
                            <span>{scirtingboard?.moisture_resistance}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Блеск:</span>
                            <span>{scirtingboard?.tone}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
        </div>
    )
}

export default Skirtingboard