import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
  city: string,
  imageURL: string,
  title: string,
  price: number
}

const Product: React.FC<Props> = ({city, imageURL, title, price}) => {
  return (
    <div className='w-[281px] h-[539px] flex flex-col gap-[30px] justify-between p-3 bg-gray-200 rounded-[2px] hover:bg-gray-400 hover:text-white transition-all delay-100'>
        <div className='flex items-center justify-between'>
            <span>{city}</span>
            <Heart/>
        </div>
        <Image src={imageURL} alt='image' width={300} height={300}/>
        <span>{title}</span>
        <div className='flex items-center justify-between p-[22px] bg-gray-500 rounded-[2px]'>
            <span className='text-white'>{price} P</span>
            <ShoppingCart color='white'/>
        </div>
    </div>
  )
}

export default Product