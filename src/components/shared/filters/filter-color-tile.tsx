import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'
import { DataFilters } from '../filters-tile'

type ColorFiltersProps = {
  colorFilter?: DataFilters[]
}


const FilterColorTile:React.FC<ColorFiltersProps> = ({colorFilter}) => {

  const [show, setShow] = useState(false)
  if (!colorFilter) return null
  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Цвет</h2>
      <div className='flex flex-col gap-2'>
        {colorFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {colorFilter.map((color) => (
                <Checkbox key={color.id} text={color.name} id={color.id} category='color'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {colorFilter.map((color) => (
              <Checkbox key={color.id} text={color.name} id={color.id} category='color'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterColorTile