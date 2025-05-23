'use client';
import { X } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const Filters = (props: Props) => {

  const [a, setA] = useState(false)
  const handleMaterial = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'Porcelain') {
      setA(!a)
    }
  }
  return (
    <div>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <span>Фильтры</span>
            <div className='flex items-center'>
              <span>СброситЬ</span>
              <X/>
            </div>
          </div>
          {/* Фильтр цены */}
          <div className='flex flex-col gap-3'>
            <span>Цена</span>
            <div className='flex gap-4'>
              <input className='w-[70px] h-[20px] pl-2 border-b focus:outline-none' type="text" placeholder='от'/>
              <input className='w-[70px] h-[20px] pl-2 border-b focus:outline-none' type="text" placeholder='до'/>
            </div>
          </div>
          {/* Фильтр материал */}
          <div className='flex flex-col gap-3'>
            <span>Материал</span>
            <label htmlFor="Porcelain" className='flex gap-3 items-center'>
              <input onClick={(e) => handleMaterial(e)} value="Porcelain" className='hidden' id="Porcelain" type="checkbox"/>
              <div className={`w-[15px] h-[15px] border rounded-[4px] ${a ? "bg-green-500" : ""}`}></div>
              Керамогранит
            </label>
            
          </div>
          {/* Фильтр помещение */}
          {/* Фильтр назначение */}
        </div>
        
    </div>
  )
}

export default Filters