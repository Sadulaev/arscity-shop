'use client'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useFilterStore } from '../../../store/FiltersTile'
import FiltersMaterial from './filters/filters-material'
import FiltersRoom from './filters/filters-room'
import FilterPurpose from './filters/filter-purpose'
import FilterSizeTile from './filters/filter-size-tile'
import FilterTilePattern from './filters/filter-tile-pattern'
import FilterSurface from './filters/filter-surface'
import FilterForm from './filters/filter-form'
import FilterStyle from './filters/filter-style'
import FilterFeatures from './filters/filter-features'
import FilterCountry from './filters/filter-country'
import FilterCollection from './filters/filter-collection'
import FilterColorTile from './filters/filter-color-tile'
import axios from 'axios'

export type DataFilters = {
  id: number,
  name: string,
}

type Filters = {
  categories: DataFilters[]
  materials: DataFilters[]
  purposes: DataFilters[],
  colors: DataFilters[],
  countries: DataFilters[],
  collections: DataFilters[],
  rooms: DataFilters[],
  shapes: DataFilters[],
  sizes: DataFilters[],
  surfaces: DataFilters[],
  styles: DataFilters[],
  patterns: DataFilters[],
  features: DataFilters[]
}

const FiltersTile = () => {
  const { resetFilters, setPrice, filters } = useFilterStore()
  const [dataFilters, setDataFilters] = useState<Filters | null>(null)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/tile/tiles/filters/')
        setDataFilters(resp.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData()  
  }, [])
  
  return (
    <div>
      <div className='flex flex-col gap-5 pb-5 mb-10 mt-10'>
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
        {/* Материал */}
        <FiltersMaterial materialFilter={dataFilters?.materials}/>
        {/* Помещение */}
        <FiltersRoom roomFilter={dataFilters?.rooms}/>
        {/* Назначение */}
        <FilterPurpose purposeFilter={dataFilters?.purposes}/>
        {/* Размер */}
        <FilterSizeTile sizeFilter={dataFilters?.sizes}/>
        {/* Цвет */}
        <FilterColorTile colorFilter={dataFilters?.colors}/>
        {/* Рисунок */}
        <FilterTilePattern patternFilter={dataFilters?.patterns}/>
        {/* Поверхность */}
        <FilterSurface surfaceFilter={dataFilters?.surfaces}/>
        {/* Форма */}
        <FilterForm formFilter={dataFilters?.shapes}/>
        {/* Стиль */}
        <FilterStyle styleFilter={dataFilters?.styles}/>
        {/* Особенность плитки */}
        <FilterFeatures featureFilter={dataFilters?.features}/>
        {/* Страна */}
        <FilterCountry countryFilter={dataFilters?.countries}/>
        {/* Коллекция */}
        <FilterCollection collectionFilter={dataFilters?.collections}/>
      </div>
    </div>
  )
}

export default FiltersTile