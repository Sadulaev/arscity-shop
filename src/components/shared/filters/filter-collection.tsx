import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type CollectionFilterProps = {
    collectionFilter?: DataFilters[]
}


const FilterCollection:React.FC<CollectionFilterProps> = ({collectionFilter}) => {

  const [show, setShow] = useState(false)

  if (!collectionFilter) return null

  return (
    <div className='z-50'>
      <h2 className='mb-4 text-[1.5rem]'>Коллекция</h2>
      <div className='flex flex-col gap-2'>
        {collectionFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {collectionFilter.map((collection) => (
                <Checkbox key={collection.id} text={collection.name} id={collection.id} category='collection'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {collectionFilter.map((collection) => (
              <Checkbox key={collection.id} text={collection.name} id={collection.id} category='collection'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterCollection