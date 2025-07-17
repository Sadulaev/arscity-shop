import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useFavorites } from '../../../store/AddToFavorites'
// import notImage from '../../../public/notimage.png'
import Link from 'next/link'
import { useCartStore } from '../../../store/CartStore'
// import config from '@/utils/config'


const FavoriteCard:React.FC<any> = ({id, name, image1, price, country, content_type_display, object_id, product}) => {

    const { favorites, localFavorites, removeFavorite } = useFavorites()
    const { addToCart, cartList } = useCartStore()
    // const imgURL = `${config.BASE_URL}${image1}`
    
    const isInCart = cartList.some(item => item.object_id === object_id && item.content_type_display === content_type_display)
    const isFavorites = favorites.some(fav => fav && fav.name === name) || localFavorites.some(item => item.id === id && item.type === content_type_display)
    console.log(isFavorites);
    console.log(id, content_type_display);
    
   
    
    const handleFAvorites = () => {
        if (isFavorites) {
            removeFavorite(product)
        }
    }

    const handleAddToCart = async () => {
        if (!isInCart) {
            await addToCart(content_type_display, object_id, 1)
        }
    }

    return (
        <div className='max-w-[300px] min-w-[300px] max-h-[514px] min-h-[514px] flex flex-col justify-between pb-4 pt-2 gap-[10px] px-3 shadow-md'>
            <div className='flex items-center justify-between'>
                <span className='flex-auto uppercase'>{country?.name ? country?.name : ""}</span>
                <Heart onClick={() => handleFAvorites()} size={35} className='hover:scale-110 transition-all duration-200' fill={isFavorites ? "red" : "white"} strokeWidth={1} />
            </div>
            

            <div className='overflow-hidden min-h-[180px] flex items-center'>
                <Image style={{minWidth: "100%", height: "270px"}}
                    objectFit='contain'
                    src={image1} alt='image' width={300} height={270}/>
            </div>
            <Link target='blank' href={`/product/tile/${id}`}>
                <span className='text-[1.3rem] cursor-pointer'>{name}</span>
            </Link>
            <div className='mt-4'>
                <span className='text-[1.3rem] text-[#474A51]'>{price} P за м²</span>
            </div>
            <button
                onClick={handleAddToCart}
                className={`w-full text-[1.2rem] p-4 border transition-all duration-200 ${
                    isInCart
                        ? 'bg-red-500 text-white border-red-500 cursor-default'
                        : 'border-[#BED1E3] hover:bg-blue-400 hover:text-white'
                }`}
                disabled={isInCart}
            >
                {isInCart ? 'в корзине' : 'в корзину'}
            </button>

        </div>
    )
}

export default FavoriteCard