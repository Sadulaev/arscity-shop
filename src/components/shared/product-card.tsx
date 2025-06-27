import { TileFields } from '@/types/typeTiles'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '../../../store/CartStore'
import { useFavorites } from '../../../store/AddToFavorites'

export type TileCardFields = {
    id: number,
    city: TileFields,
    imageURL: string,
    title: string,
    price: number,
    content_type: string
}

const Product: React.FC<TileCardFields> = ({ id, city, imageURL, title, price, content_type }) => {
    const { addToCart, cartList } = useCartStore()
    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const isInFavorites = favorites.some(fav => fav.object_id === id && fav.content_type_display === content_type)
    const isInCart = cartList.some(item => item.object_id === id && item.content_type_display === content_type)


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
            await addToCart(content_type, id, 1)
        }
    }

    return (
        <div className='max-w-[300px] min-w-[300px] max-h-[514px] min-h-[514px] flex flex-col justify-between pb-4 pt-2 gap-[10px] px-3 shadow-md'>
            <div className='flex items-center justify-between'>
                <span>{city.name}</span>
                <Heart
                    onClick={handleFavoriteToggle}
                    className='cursor-pointer'
                    color={isInFavorites ? 'red' : 'black'}
                    fill={isInFavorites ? 'red' : 'transparent'}
                />
            </div>
            <div className='overflow-hidden min-h-[180px] flex items-center'>
                <Image src={imageURL} objectFit='cover' alt='image' width={150} height={0} style={{ width: '100%', height: '100%' }} />
            </div>
            <Link target='blank' href={`/product/tile/${id}`}>
                <span className='text-[1.3rem] cursor-pointer'>{title}</span>
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

export default Product