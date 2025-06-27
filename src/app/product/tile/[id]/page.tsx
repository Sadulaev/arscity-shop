'use client';
import { ArrowRight, CreditCard, Heart, Landmark, MoveRight, Wallet } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import imageTest from '../../../../../public/testTileImage.png'
import laparet from '../../../../../public/laparet.png'
import Services from '@/components/shared/services'
import { TileTypes } from '@/types/typeTiles'
import axios from 'axios'
import Link from 'next/link';
import Product from '@/components/shared/product-card';
import { useCartStore } from '../../../../../store/CartStore';

type Props = {}

const TilePage = (props: Props) => {

    const [tile, setTile] = useState<TileTypes>()
    const [tilesForCollection, setTilesForCollection] = useState<TileTypes[]>([])
    const {addToCart, cartList} = useCartStore()

    useEffect(() => {
        const id = window.location.pathname.split("/").pop()
        try{
            const fetchData = async () => {
                const response = await axios.get(`http://127.0.0.1:8000/api/tile/tiles/${id}`)
                setTile(response.data)
                console.log(response);
                
            }
            fetchData()
        } catch(error) {
            console.log(error);
            
        }
    }, [])

    useEffect(() => {
        if (!tile) return
        try{
            const fetchTilesForCollection = async () => {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/tile/tiles/?collection=${tile?.collection.id}`
            )
            setTilesForCollection(response.data.results)
            console.log("Проверка",response.data.results);
               
        }
        fetchTilesForCollection()
        } catch (error) {
            console.log(error);
        }
    }, [tile])

    
    console.log("cartList = ",cartList);
    

    if (!tile) return null 
    console.log(tile);
    
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-screen bg-linear-to-b from-[#D2D2D2] to-white md:h-[317px] -mt-20 flex items-center pt-20 -z-1'>
                <div className='flex flex-col gap-2 md:flex-row md:justify-between md:w-[1370px] mx-auto px-10 md:px-12'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3 text-gray-400'>
                            <span>Главная</span>
                            <MoveRight color="#ee1b1b" strokeWidth={1} />
                            <span>Каталог</span>
                            <MoveRight color="#ee1b1b" strokeWidth={1} />
                            <span>Керамическая плитка</span>
                        </div>
                        <h1 className='text-2xl md:text-3xl'>{tile.name}</h1>
                    </div>
                    
                    <button className='flex md:gap-3 items-center border border-gray-400 md:py-4 px-15 uppercase hover:bg-red-500 hover:text-white hover:border-none transition-all duration-200 z-50'>
                        <Heart/>
                        <span>ДОБАВИТЬ в избранное</span>
                    </button>
                    
                </div>
            </div>



            <div className='flex flex-col justify-between w-screen md:w-[1370px] mx-auto px-10 md:px-12'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='relative flex items-center bg-[#F6F6F6] md:w-[666px] md:h-[480px]'>
                        <Image src={tile.image1} width={666} height={480} alt='ImageTile'/>
                        <div className='absolute top-3 -right-5 py-2 px-3.5 bg-red-500 text-white'>
                            <span className='relative after:content-[""] after:absolute after:top-[30px] after:-right-[14px] after:border-t-[10px] after:border-r-[20px] after:border-t-[#6D6D6D] after:border-r-transparent'>скидка 30%</span>
                        </div>
                        
                    </div>

                    <div className='flex flex-col justify-between md:w-[45%] h-[500px] pr-2'>
                        <span>Артикул: 5758753287542</span>
                        <div className='flex gap-4 md:gap-10 items-end mt-8'>
                            <div className='relative flex items-center justify-center w-[330px] h-[147px] border border-gray-400 '>
                                <Image objectFit='cover' src={tile.collection.logo} width={203} height={30} alt='LogoCollection'/>
                                <div className='absolute bg-white -bottom-3 px-7 underline underline-offset-4'>{tile.collection.name}</div>
                            </div>
                            <div className='uppercase flex flex-col md:flex-row md:items-end gap-2'>
                                <Link href={`http://localhost:3000/product/collection/${tile.collection?.id}`} className='md:w-[50%]'>назад в коллекцию</Link>
                                <ArrowRight color="#ee1b1b" strokeWidth={1} />
                            </div>
                        </div>
                        


                        
                        <div className='flex items-center mb-4 md:mb-0 gap-5 mt-10'>
                            <div className='flex justify-between px-3 py-1 md:h-15 md:text-2xl bg-[#E9E9E9] w-[50%]'>
                                <button className='w-15 cursor-pointer bg-white'>-</button>
                                <input type="text" placeholder='0' className='focus:outline-none w-20 text-center'/>
                                <button className='w-15 cursor-pointer bg-white'>+</button>
                            </div>
                            <div className='md:text-2xl flex justify-between px-3 py-1 md:h-15 bg-[#E9E9E9] w-[25%]'>
                                <button className='w-[55px] bg-white'>м²</button>
                                <button className='w-[55px] bg-white hidden'>шт.</button>
                            </div>
                        </div>
                        <div className='flex gap-4 mb-4 md:mb-0 md:text-2xl'>
                            <span>Итоговая цена: </span>
                            <span>{tile.price} руб.</span>
                        </div>
                        <div className='flex flex-col md:flex-row mb-4 md:mb-0 gap-3 items-center justify-between w-[100%] text-red-500'>
                            <button onClick={() => addToCart('tile', tile.id, 1)} className='border-2 py-2 px-10 w-[100%] md:w-[50%]'>+  добавить в корзину</button>
                            <button className='border-2 flex items-center justify-center gap-2 py-2 px-10 w-[100%] md:w-[50%]'>
                                <span>быстрый заказ</span>
                                <ArrowRight/>
                            </button>
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




                <div className='flex flex-col md:flex-row justify-between w-[100%] px-10 py-10 my-14 bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Помещение:</span>
                            <span>{tile.room?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Назначение:</span>
                            <span>{tile.purpose?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Цвет:</span>
                            <span>{tile.color?.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Рисунок плитки</span>
                            <span>{tile.pattern?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Размер</span>
                            <span>{tile.size.name} см</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Материал</span>
                            <span>{tile.material?.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Особенности плитки</span>
                            <span>{tile.features?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Страна</span>
                            <span>{tile.country.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Коллекция</span>
                            <span>{tile.collection?.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Поверхность</span>
                            <span>{tile.surface?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Форма</span>
                            <span>{tile.form?.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-400'>Стиль</span>
                            <span>{tile.style?.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Services/>
            <div className='flex flex-col gap-10 my-10 mx-auto md:w-[1370px] px-10 md:px-12'>
                <h2 className='text-2xl'>Другие плитки коллекции {tile.collection?.name}</h2>
                <div className='flex flex-col flex-wrap md:flex-row gap-3 items-center'>
                    {tilesForCollection.map((tile) => (
                        <Product city={tile.country} imageURL={tile.image1} title={tile.name} price={tile.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TilePage