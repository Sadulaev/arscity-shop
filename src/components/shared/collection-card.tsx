import { ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


type PropsCardCollection = {
    city: string,
    title: string,
    imageURL: string
}

const CollectionCard: React.FC<PropsCardCollection> = ({ city, title, imageURL }) => {
  return (
    <div className='min-w-[400px] min-h-[514px] flex flex-col mt-21 gap-[42px]'>
        <div className='flex items-center justify-between gap-4'>
            <span className='flex-auto uppercase'>{city}</span>
            <div className='w-[100%] border'></div>
            <Heart className='flex-auto'/>
        </div>
        <div className='flex justify-between flex-col gap-[33px]'>
            <div className='relative w-[398px]'>
                <Image
                style={{minWidth: "100%", height: "270px"}}
                objectFit='contain'
                src={imageURL} alt='image' width={300} height={270}/>
                <span className='absolute bottom-0 left-0 w-[122px] h-[36px] flex items-end justify-center bg-white'>Laparet</span>
            </div>
            <h2 className='text-2xl uppercase font-bold text-gray-600'>{title}</h2>
            <div className='flex items-center justify-between text-gray-600 p-[22px] bg-gray-200'>
                <span>4 элемента</span>
                <ArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard