import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'
import { DataFilters } from '../filters-tile'

type SizeFiltersProps = {
  sizeFilter?: DataFilters[]
}

const FilterSizeTile:React.FC<SizeFiltersProps> = ({sizeFilter}) => {
  const [show, setShow] = useState(false)

  if (!sizeFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Размер</h2>
      <div className='flex flex-col gap-2'>
        {sizeFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {sizeFilter.map((size) => (
                <Checkbox key={size.id} text={size.name} id={size.id} category='size'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {sizeFilter.map((size) => (
              <Checkbox key={size.id} text={size.name} id={size.id} category='size'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterSizeTile