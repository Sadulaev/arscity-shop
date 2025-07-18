'use client';
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { useCartStore } from '../../../store/CartStore'
import { useFavorites } from '../../../store/AddToFavorites';
// import { UnderlayType } from '@/app/products/underlay/page';


type Props = {
    id: number,
    name: string,
    thickness: string,
    has_vapor_barrier: string,
    floor_type: string,
    price: number,
    image1: string,
    content_type: string,
    
    product: any
}

const ProductUnderlay: React.FC<Props> = ({id, name, price, image1, content_type, product}) => {

  const { addToCart, cartList, localCart } = useCartStore()
  const { addFavorite, removeFavorite, favorites, localFavorites } = useFavorites()
  const isAuthenticated = useMemo(() => !!localStorage.getItem('access_token'), []);
  
  
  const isInCart = isAuthenticated 
    ? cartList.some(item => item.object_id === id && item.content_type_display === content_type)
    : localCart.some(item => item.object_id === id && item.content_type === content_type);

  const isInFavorites = favorites.some(fav => fav.object_id === id && fav.content_type_display === content_type) || localFavorites.some(item => item.id === id && item.type === content_type);
  
  const handleFavoriteToggle = () => {
    const selectedFavorites = favorites.filter(item => item.object_id === id && item.content_type_display === content_type);
    const selectedFavoritesLocalStorage = localFavorites.filter(item => item.id === id && item.type === content_type);
    
    if (isInFavorites) {
      if (isAuthenticated) {
          removeFavorite(selectedFavorites[0]);
      } else {
          removeFavorite(selectedFavoritesLocalStorage[0]);
      }
    } else {
      addFavorite(product);
    }
  };

  const handleAddToCart = async () => {
      if (!isInCart) {
          await addToCart(
            content_type, 
            id, 
            1, 
            {
              id,
              name: name,
              image1: image1,
              price  
            }
          );
      }
  };
  return (
    <div className='max-w-[300px] min-w-[300px] max-h-[550px] min-h-[550px] flex flex-col justify-between pb-4 gap-[20px] px-3 cursor-pointer custom-shadow hover:-translate-y-1 transition-all duration-200'>
        <div className='flex items-center justify-end pt-2'>
            <Heart
              onClick={handleFavoriteToggle}
              className='cursor-pointer'
              color={isInFavorites ? 'red' : 'black'}
              fill={isInFavorites ? 'red' : 'transparent'}
            />
        </div>
        <div className='overflow-hidden min-h-[200px] flex items-center'>
          <Image src={image1} alt='image' width={300} height={300}/>
        </div>
        <Link href={`/product/underlay/${id}`}>
          <span className='text-[1.3rem]'>{name}</span>
        </Link>
        <div className='flex items-center justify-between  rounded-[2px] text-black hover:bg-white hover:text-black transition-all delay-150'>
            <div>
            <span className='text-[1.3rem] text-[#474A51]'>{price} за рулон</span>
          </div>
        </div>
     
        <button onClick={handleAddToCart} className={`w-full text-[1.2rem] p-4 border transition-all duration-200 ${
          isInCart
            ? 'bg-red-500 text-white border-red-500 cursor-default'
            : 'border-[#BED1E3] hover:bg-blue-400 hover:text-white'
        }`}
        disabled={isInCart}>{isInCart ? 'в корзине' : 'в корзину'}</button>
    </div>
  )
}

export default ProductUnderlay