import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CatalogUpdates = (props: Props) => {

    const collectionMock = [
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "МоноТиберио",
            city: "ИТАЛИЯ",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        },
        {
            desc: "Новая коллекция от Casabella",
            title: "MONO",
            city: "ИТАЛИЯ",
            imageURL: "https://akijceramics.net/wp-content/uploads/2023/12/D-1097-LBR-1-1.jpg"
        },
        {
            desc: "Новая эксклюзивная коллекция от Laparet",
            title: "SIMPLE",
            city: "Россия",
            imageURL: "https://mosplitka.ru/upload/iblock/1c1/1c1ec3957c2098e916dadb3b5890d395.jpg"
        }
    ]

  return (
    <div className='w-[1370px] mx-auto px-10 mb-28 flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
            <h2 className='text-2xl'>Новинки в каталоге</h2>
            <div className='flex items-center gap-5 text-gray-500 text-xl'>
                <span>Все коллекции</span>
                <button className='w-[40px] h-[40px] rounded-[50%] bg-red-600 flex items-center justify-center cursor-pointer hover:scale-[1.1] transition-all delay-100'>
                    <ArrowRight color='white' size={20}/>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-between h-[520px] gap-4'>
            <div className='flex items-center justify-between gap-4 flex-col flex-[40%] h-[100%]'>
                <div className='h-[50%] w-[100%] relative'>
                    <Image 
                    style={{minWidth: "100%", height: "100%"}} 
                    width={300} 
                    height={400} 
                    src={collectionMock[0].imageURL} 
                    alt='image'
                    className='object-cover'
                    />
                    <div className='absolute top-[30%] left-4 bg-gray-400 text-white p-5 opacity-[0.8]'>
                        <p>{collectionMock[0].desc}</p>
                        <h2 className='text-2xl font-bold opacity-[1]'>{collectionMock[0].title}</h2>
                        <span>{collectionMock[0].city}</span>
                    </div>
                </div>
                <div className='h-[50%] w-[100%] relative'>
                    <Image 
                    style={{minWidth: "100%", height: "100%"}} 
                    objectFit='cover' 
                    width={300} 
                    height={400} 
                    src={collectionMock[1].imageURL} 
                    alt='image'
                    className='object-cover'/>
                    <div className='absolute top-[30%] left-4 bg-gray-400 text-white p-5 opacity-[0.8]'>
                        <p>{collectionMock[1].desc}</p>
                        <h2 className='text-2xl font-bold opacity-[1]'>{collectionMock[1].title}</h2>
                        <span>{collectionMock[1].city}</span>
                    </div>
                </div>
            </div>
            <div className='flex-[60%] h-[100%] relative'>
                <div className='w-[100%] h-[100%]'>
                    <Image 
                    style={{minWidth: "100%", maxHeight: "100%"}} 
                    width={700} 
                    height={700} 
                    src={collectionMock[2].imageURL} 
                    alt='image'
                    className='object-cover'/>
                    <div className='absolute top-[30%] left-4 bg-gray-400 text-white p-5 opacity-[0.8]'>
                        <p>{collectionMock[2].desc}</p>
                        <h2 className='text-2xl font-bold opacity-[1]'>{collectionMock[2].title}</h2>
                        <span>{collectionMock[2].city}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogUpdates