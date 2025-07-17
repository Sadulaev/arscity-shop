"use client";
import { Heart, Layers } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import notImage from '../../../public/notimage.png'
import { CatalogType } from './catalog-updates';
import { useFavorites } from '../../../store/AddToFavorites';
import Link from 'next/link';


type PropsCardCollection = {
    id?: number,
    country: string,
    name: string,
    image1: string,
    number_of_elements: number | null
    collection: CatalogType,
    content_type?: string
}

const CollectionCard: React.FC<PropsCardCollection> = ({ id, country, name, image1, number_of_elements, content_type }) => {

    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const isInFavorites = favorites.some(fav => fav.object_id === id && fav.content_type_display === content_type)

    const handleFavoriteToggle = () => {
        const ct = favorites.filter(item => item.object_id === id && item.content_type_display === content_type)
        if (isInFavorites) {
            removeFavorite({id: ct[0].id})
        } else {
            if (content_type && id) {
                addFavorite({type: content_type, id: id})
            }
        }
    }

    return (
        <div className='min-w-[350px] px-6 min-h-[514px] flex flex-col mt-10 gap-[42px] hover:-translate-y-1 transition-all duration-200'>
            <div className='flex items-center justify-between gap-4'>
                <span className='flex-auto uppercase'>{country}</span>
                <div className='w-[100%] border'></div>
                <Heart
                    onClick={handleFavoriteToggle}
                    className='cursor-pointer'
                    size={40}
                    color={isInFavorites ? 'red' : 'black'}
                    fill={isInFavorites ? 'red' : 'transparent'}
                />
            </div>
            <div className='flex justify-between flex-col gap-[33px]'>
                <div className='relative md:w-[398px]'>
                    <Image
                        style={{ minWidth: "100%", height: "270px" }}
                        objectFit='contain'
                        src={image1 ? image1 : notImage} alt='image' width={300} height={270} />
                    <span className='absolute bottom-0 left-0 w-[122px] h-[36px] flex items-end justify-center bg-white uppercase'>Хит 2025</span>
                </div>
                <Link href={`/product/collection/${id}`}>
                    <h2 className='text-2xl uppercase font-bold text-gray-600'>{name}</h2>
                </Link>

                <div className='flex items-center justify-between text-gray-600 p-4 md:p-[22px] bg-gray-200'>
                    <span>колекция включает  {number_of_elements} элемента</span>
                    <Layers />
                </div>
            </div>
        </div>
    )
}

export default CollectionCard