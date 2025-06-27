'use client'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useFilterStore } from '../../../store/FiltersTile'

import axios from 'axios'
import CheckBoxListLaminate from './filters-laminate/filters-lamonate'
import { TileFields } from '@/types/typeLaminate'
import { FilterCategory } from '../../../store/FiltersLaminate'

type DataFiltersResponse = {
  [key: string]: {
    verbose_name: string;
    items: TileFields[];
  };
};
const FiltersLaminatBlock = () => {
  const { resetFilters, setPrice, filters } = useFilterStore()
  const [dataFilters, setDataFilters] = useState<DataFiltersResponse>()

  useEffect(() => {
    const fetchData = async() => {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/laminate/laminates/filters/')
        setDataFilters(resp.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData()  
  }, [])
  
  
  if (!dataFilters) return null

  return (
    <div>
      <div className='flex flex-col gap-5 pb-5 mb-10 mt-10'>
        <>
          <div className='flex items-center gap-3'>
            <span>Фильтры</span>
            <div onClick={resetFilters} className='flex items-center gap-2 cursor-pointer'>
              <span>Сбросить</span>
              <X size={16} color='red'/>
            </div>
          </div>
          {/* Цена */}
          <div className='flex flex-col gap-3'>
            <span className='text-[1.5rem]'>Цена</span>
            <div className='flex gap-4'>
              <input value={filters.price.min} onChange={(e) => setPrice(e.target.value, filters.price.max)} className='w-[70px] h-[20px] pl-2 border-b focus:outline-none' type="text" placeholder='от'/>
              <input value={filters.price.max} onChange={(e) => setPrice(filters.price.min, e.target.value)} className='w-[70px] h-[20px] pl-2 border-b focus:outline-none' type="text" placeholder='до'/>
            </div>
          </div>
          {/* Толщина */}
          {Object.entries(dataFilters).map(([key, {verbose_name, items}]) => {
            
            return <CheckBoxListLaminate key={key} value={key as FilterCategory} title={verbose_name} thicknessFilter={items}/>
            
          })}
        </>
      </div>
    </div>
  )
}

export default FiltersLaminatBlock