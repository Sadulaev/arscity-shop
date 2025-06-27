import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type SurfaceFilterProps = {
    surfaceFilter?: DataFilters[]
}

const FilterSurface:React.FC<SurfaceFilterProps> = ({surfaceFilter}) => {

  const [show, setShow] = useState(false)
  if (!surfaceFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Поверхность</h2>
      <div className='flex flex-col gap-2'>
        {surfaceFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {surfaceFilter.map((surface) => (
                <Checkbox key={surface.id} text={surface.name} id={surface.id} category='surface'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {surfaceFilter.map((surface) => (
              <Checkbox key={surface.id} text={surface.name} id={surface.id} category='surface'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterSurface