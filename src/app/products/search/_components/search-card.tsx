import React from 'react'
import { useCartStore } from '../../../../../store/CartStore'
import { useFavorites } from '../../../../../store/AddToFavorites'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import Link from 'next/link'

type Props = {
    content_type: string
    id: number,
    name: string,
    price: number,
    image1: string,
    tile_type?: string,
    country: string
}

const SearchCard:React.FC<Props> = ({content_type, id, name, price, image1, tile_type, country}) => {
    const { addToCart, cartList } = useCartStore()
    const img = `http://127.0.0.1:8000${image1}`  
    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const isInFavorites = favorites.some(fav => fav.object_id === id && fav.content_type_display === content_type)
    const isInCart = cartList.some(item => item.object_id === id && content_type === item.content_type_display)
    
    
    const handleFavoriteToggle = () => {
    const ct = favorites.filter(item => item.object_id === id && item.content_type_display === content_type)
    if (isInFavorites) {
        removeFavorite(ct[0].id)
    } else{
        addFavorite(content_type, id)
    }
    }

    const handleAddToCart = async () => {
    if (!isInCart) {
        await addToCart('underlay', id, 1)
    }
    }
  return (
    <div className='max-w-[300px] min-w-[300px] max-h-[550px] min-h-[550px] flex flex-col justify-between pb-4 gap-[20px] px-3 cursor-pointer custom-shadow'>
        <div className='flex items-center justify-end pt-2'>
            <Heart
              onClick={handleFavoriteToggle}
              className='cursor-pointer'
              color={isInFavorites ? 'red' : 'black'}
              fill={isInFavorites ? 'red' : 'transparent'}
            />
        </div>
        <div className='overflow-hidden min-h-[200px] flex items-center'>
          <Image src={img} alt='image' width={300} height={300}/>
        </div>
        
        <span className='text-[1.3rem]'>{name}</span>
        <Link target='blank' href={`https://wa.me/79990019494?text=Здравствуйте, я бы хотел купить у вас подложку ${name}, мы сможем обсудить детали?`}>
          <div className='flex items-center justify-between  rounded-[2px] text-black hover:bg-white hover:text-black transition-all delay-150'>
              <div>
              <span className='text-[1.3rem] text-[#474A51]'>{price} за рулон</span>
            </div>
          </div>
        </Link>
        <button onClick={handleAddToCart} className={`w-full text-[1.2rem] p-4 border transition-all duration-200 ${
          isInCart
            ? 'bg-red-500 text-white border-red-500 cursor-default'
            : 'border-[#BED1E3] hover:bg-blue-400 hover:text-white'
        }`}
        disabled={isInCart}>{isInCart ? 'в корзине' : 'в корзину'}</button>
    </div>
  )
}

export default SearchCard