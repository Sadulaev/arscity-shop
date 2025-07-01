'use client';
import React, { useEffect, useState } from 'react'
import { useFavorites } from '../../../store/AddToFavorites'
import { SceletonCard } from '@/components/shared/skeletons/sceleton'
import FavoriteCard from '@/components/shared/favorite-card'
import EmptyFavorites from './_components/empty-favorites';
import axios from 'axios';

type Props = {}

const Favorites = (props: Props) => {

    const { favorites, addFavorite, removeFavorite } = useFavorites()

    if (favorites.length === 0) return <EmptyFavorites/>


    return (
        <div className='flex flex-col w-[1370px] mx-auto mt-8 px-12 pt-3 mb-20'>
            
            <h2 className='mx-auto text-4xl'>Избранные товары</h2>
            <div className='flex flex-wrap gap-3 justify-between'>
                {favorites?.length > 0 ? (
                    favorites.map((favorite) => (
                    <div key={favorite.id}>
                        <FavoriteCard object_id={favorite.object_id} content_type_display={favorite.content_type_display} id={favorite.id} name={favorite.name} image1={favorite.image1} price={favorite?.price} country={favorite.country} description={favorite.description} number_of_elements={favorite?.number_of_elements}/>
                    </div>
                ))
                ) : (
                new Array(6).fill(0).map((_, index) => (
                    <SceletonCard/>
                ))
                )}
            </div>
            
        </div>
    )
}

export default Favorites