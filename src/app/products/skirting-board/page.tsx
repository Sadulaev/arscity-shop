'use client'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { SceletonCard } from '@/components/shared/skeletons/sceleton'
import ProductSkirtingBoard from '@/components/shared/product-card-skirtingboard'
import FiltersSkirtingBoard from './_components/filtersSkirtingBoard'
import { X } from 'lucide-react'


export type SkirtingBoardTYpe = {
  id: number,
  name: string,
  type: string,
  price: number,
  thickness: number,
  height: number,
  moisture_resistance: string,
  tone: string,
  image1: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  content_type: string
} 


const SkirtingBoard = () => {
  const [skirtingBoards, setSkirtingBoards] = useState<SkirtingBoardTYpe[]>([])
  const [selectedSkirtingBoards, setSelectedSkirtingBoards] = useState<string[]>([])
  const [filterShow, setFilterShow] = useState(false)
  
  useEffect(() => {
    const fethProduct = async() => {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/laminate/skirting-boards/`, {
        params: {
          type: selectedSkirtingBoards.join(',')
        }
      })
      setSkirtingBoards(data)
    }
    fethProduct()
  }, [selectedSkirtingBoards])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (selectedSkirtingBoards.includes(e.target.value)) {
      setSelectedSkirtingBoards(prev => prev.filter(i => i !== e.target.value))
    } else {
      setSelectedSkirtingBoards(prev => [...prev, e.target.value])
    }
  }
  const resetFilters = () => {
    setSelectedSkirtingBoards([])
  }
  return (
    <div className='flex gap-5 md:w-[1370px] mx-auto mt-10 px-12 pt-5'>
      {window.innerWidth > 650 ? "" : (
        <button onClick={() => setFilterShow(!filterShow)} className='absolute top-98 left-12 border px-5 py-2 bg-red-500 text-white'>показать фильтры</button>
      )}
      <div className='pr-2 w-[25%] hidden md:block md:max-h-[80vh] md:overflow-y-auto'>
        <FiltersSkirtingBoard handleChange={handleChange} resetFilters={resetFilters} selectedSkirtingBoards={selectedSkirtingBoards}/>
      </div>
      
      <div onClick={() => setFilterShow(false)} className={`w-screen min-h-screen absolute top-0 ${!filterShow ? "left-[-100vw]" : "left-0"} transition-all duration-200 bg-gray-300/50`}>
        <div onClick={(e) => e.stopPropagation()} className='relative overflow-y-auto max-h-[80vh] px-3 top-0 left-0 bg-white w-[50%] min-h-screen z-[1000]'>
          <FiltersSkirtingBoard handleChange={handleChange} resetFilters={resetFilters} selectedSkirtingBoards={selectedSkirtingBoards}/>
          <X onClick={() => setFilterShow(false)} className='absolute right-2 top-2'/>
        </div>
      </div>
      {/* <FiltersSkirtingBoard handleChange={handleChange} resetFilters={resetFilters} selectedSkirtingBoards={selectedSkirtingBoards}/> */}
      <div className='flex flex-wrap gap-5'>
        {skirtingBoards?.length > 0 ? (
          skirtingBoards.map((skirtingBoard) => (
            <div key={skirtingBoard.id}>
              <ProductSkirtingBoard
                id={skirtingBoard.id} 
                name={skirtingBoard.name} 
                type={skirtingBoard.type}
                price={skirtingBoard.price}
                thickness={skirtingBoard.thickness} 
                height={skirtingBoard.height} 
                moisture_resistance={skirtingBoard.moisture_resistance} 
                tone={skirtingBoard.tone}
                image1={skirtingBoard.image1}
                content_type="skirtingboard"
                />
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

export default SkirtingBoard