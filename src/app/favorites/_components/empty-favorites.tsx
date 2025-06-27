import Image from 'next/image'
import React from 'react'
import emptyFav from '../../../../public/emptyfav.svg'
import Link from 'next/link'

type Props = {}

const EmptyFavorites = (props: Props) => {
  return (
    <div className='md:w-[1370px] md:px-12 md:mt-20 flex flex-col mx-auto h-[80vh] '>
        <h2 className='text-5xl'>В избарнных пока пусто</h2>
        <div className='flex w-[100%] justify-center'>
            <Image src={emptyFav} alt='cart' width={500} height={600}/>
        </div>
        <p>Если вы ранее оформляли заказ, вы сможете его увидеть в <Link href="/profile" className='text-blue-600'>личном кабинете</Link></p>
    </div>
  )
}

export default EmptyFavorites