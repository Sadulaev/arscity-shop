'use client'
import React, { useEffect, useState } from 'react'
import FiltersTile from '@/components/shared/filters-tile'
import { useFilterStore } from '../../../../store/FiltersTile'
import axios from 'axios'
import Product from '@/components/shared/product-card'
import { TileTypes } from '@/types/typeTiles'
import { SceletonCard } from '@/components/shared/skeletons/sceleton'
import { X } from 'lucide-react'
import { useCartStore } from '../../../../store/CartStore'




const Products = () => {
  const { filters } = useFilterStore()
  const [tiles, setTiles] = useState<TileTypes[]>([])
  const [filterShow, setFilterShow] = useState(false)
  const fetchCart = useCartStore((state) => state.fetchCart)

  useEffect(() => {
    fetchCart()
  }, [])


  useEffect(() => {
    const query = new URLSearchParams() 
    Object.entries(filters).forEach(([key, values]) => 
      { if (key === 'price') 
        { if (filters.price.min) query.append('price_min', filters.price.min) 
          if (filters.price.max) query.append('price_max', filters.price.max) } 
          else if (Array.isArray(values) && values.length > 0) {
          const ids = values.map((v) => v.id).join(',')
          query.append(key, ids)
        }
      }
    )
    const queryString = query.toString()
    const fethProduct = async() => {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/tile/tiles/?${queryString}`)
      setTiles(data.results)
      
    }
    fethProduct()
  }, [filters])
  
  return (
    <div className='flex gap-5 w-screen md:w-[1370px] mx-auto mt-10 px-12 pt-5'>
      {/* {window.innerWidth > 650 ? "" : ( */}
        <button onClick={() => setFilterShow(!filterShow)} className='absolute top-98 left-12 border px-5 py-2 bg-red-500 text-white'>показать фильтры</button>
      {/* )} */}
      <div className='pr-2 min-w-[20%] hidden md:block md:max-h-[80vh] md:overflow-y-auto'>
        <FiltersTile />
      </div>
      
      <div onClick={() => setFilterShow(false)} className={`w-screen md:hidden lg:hidden min-h-screen absolute top-0 ${!filterShow ? "left-[-100vw]" : "left-0"} transition-all duration-200 bg-gray-300/50`}>
        <div onClick={(e) => e.stopPropagation()} className='relative overflow-y-auto max-h-[80vh] px-3 top-0 left-0 bg-white w-[50%] min-h-screen z-[1000]'>
          <FiltersTile />
          <X onClick={() => setFilterShow(false)} className='absolute right-2 top-2'/>
        </div>
      </div>
      
      

      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl uppercase font-bold w-[100%]'>Керамическая плитка и керамогранит</h2>
        <div className='flex flex-wrap gap-4'>
          {tiles?.length > 0 ? (
            tiles.map((tile) => (
              <div key={tile.id}>
                
                  <Product content_type='tile' id={tile.id} city={tile.country} imageURL={tile.image1 || ''} title={tile.name} price={tile.price} />
              
                
              </div>
            ))
          ) : (
            new Array(6).fill(0).map((_, index) => (
              <SceletonCard key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Products