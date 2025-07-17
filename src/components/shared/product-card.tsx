import { TileFields } from '@/types/typeTiles'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '../../../store/CartStore'
import { useFavorites } from '../../../store/AddToFavorites'
import { useMemo } from 'react'
// import { LaminateTypes } from '@/types/typeLaminate'

export type TileCardFields = {
    id: number,
    city: TileFields,
    imageURL?: string,
    title: string,
    price: number,
    content_type: string
    index?: number
    
    product?: any,
}

const Product: React.FC<TileCardFields> = ({ id, city, imageURL, title, price, content_type, product }) => {
    const { addToCart, cartList, localCart } = useCartStore()
    const { addFavorite, removeFavorite, favorites, localFavorites } = useFavorites()
    const isAuthenticated = useMemo(() => !!localStorage.getItem('access_token'), []);
    
    
    const isInCart = isAuthenticated 
      ? cartList.some(item => item.object_id === id && item.content_type_display === content_type)
      : localCart.some(item => item.object_id === id && item.content_type === content_type);

    const isInFavorites = favorites.some(fav => fav.object_id === id && fav.content_type_display === content_type) || 
                         localFavorites.some(item => item.id === id && item.type === content_type);
    
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
                name: title,
                image1: imageURL,
                price,
                country: product?.country,
                collection: product.collection
              }
            );
        }
    };

    return (
        <div className='max-w-[300px] min-w-[300px] max-h-[514px] min-h-[514px] flex flex-col justify-between pb-4 pt-2 gap-[10px] px-3 shadow-md hover:-translate-y-1 transition-all duration-200'>
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
                <Image 
                  src={imageURL || "/placeholder-product.png"} 
                  alt='image' 
                  width={300} 
                  height={180}
                  className="w-full h-full object-cover"
                />
            </div>
            <Link target='blank' href={`/product/${content_type}/${id}`}>
                <span className='text-[1.3rem] cursor-pointer hover:text-red-600 transition-all duration-150'>{title}</span>
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
    );
};

export default Product;