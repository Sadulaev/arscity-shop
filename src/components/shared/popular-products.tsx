'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import CollectionCard from './collection-card'
import Product from './product-card';

type Props = {}

const PopularProducts = (props: Props) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    const [viewMode, setViewMode] = useState<'collections' | 'products'>('collections')
    const collectionMock = [
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "МоноТиберио",
            city: "ИТАЛИЯ",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        },
        {
            desc: "Новая коллекция от Casabella",
            title: "MONO",
            city: "ИТАЛИЯ",
            imageURL: "https://akijceramics.net/wp-content/uploads/2023/12/D-1097-LBR-1-1.jpg"
        },
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "SIMPLE",
            city: "Россия",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        },
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "МоноТиберио",
            city: "ИТАЛИЯ",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        },
        {
            desc: "Новая коллекция от Casabella",
            title: "MONO",
            city: "ИТАЛИЯ",
            imageURL: "https://akijceramics.net/wp-content/uploads/2023/12/D-1097-LBR-1-1.jpg"
        },
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "SIMPLE",
            city: "Россия",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        }
    ] 
    const popularProductMode = [
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },
        {
            city: 'Italon, Россия ',
            imageURL: 'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AlmaCeramica/colllections/arina/photo_in_the_interior/plitka_alma_ceramica_arina_41_8x41_8_napolnaya_chernaya_tfu03ara200_793.jpg',
            title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
            price: 3564,
        },

    ]

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left: -420, behavior: "smooth"})
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            const el = scrollRef.current;
            const maxScrollLeft = el.scrollWidth - el.clientWidth;
            if (el.scrollLeft + 120 >= maxScrollLeft) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: 420, behavior: 'smooth' });
            }
        }
    }

    return (
        <div className='flex flex-col gap-5 w-[1370px] mx-auto px-10'>
            <div className='flex items-center justify-between text-2xl uppercase'>
                <div className='flex items-center gap-10'>
                    <h2 style={{color: viewMode === 'collections' ? "red" : 'black'}} className='cursor-pointer font-bold hover:scale[1.1] transition-all delay-150' onClick={() => setViewMode('collections')}>Популярные коллеции</h2>
                    <h2 style={{color: viewMode === 'products' ? "red" : 'black'}} className='cursor-pointer font-bold hover:text-red-500 transition-all delay-150' onClick={() => setViewMode('products')}>Популярные ТОВАРЫ</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <span>все коллекции</span>
                    <div className='flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-red-600 text-white'>
                        <ArrowRight size={20}/>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center gap-5'>
                {viewMode === "collections" ? (
                    <>
                        <button onClick={scrollLeft} className='cursor-pointer hover:scale-[1.1] transition-all delay-100 p-3 bg-red-600 rounded-[50%]'>
                            <ArrowLeft size={20} color='#fff'/>
                        </button>
                        <div ref={scrollRef} className='flex gap-8 overflow-x-hidden overflow-y-hidden mb-5'>
                            
                            {collectionMock.map((collection, index) => (
                                <CollectionCard  key={index} city={collection.city} title={collection.title} imageURL={collection.imageURL} />
                            ))}  
                            
                        </div>
                        <button onClick={scrollRight} className='cursor-pointer hover:scale-[1.1] transition-all delay-100 p-3 bg-red-600 rounded-[50%]'>
                            <ArrowRight size={20} color='#fff'/>
                        </button>
                    </>
                    
                ) : (
                    <div className='flex gap-10 flex-wrap '>
                        {popularProductMode.map((product, index) => (
                            <Product city={product.city} title={product.title} imageURL={product.imageURL} price={product.price}/>
                        ))}
                    </div> 
                )}
            </div>
            
            
        </div>
    )
}

export default PopularProducts