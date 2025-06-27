import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type StyleFilterProps = {
    styleFilter?: DataFilters[]
}

const FilterStyle:React.FC<StyleFilterProps> = ({styleFilter}) => {

  const [show, setShow] = useState(false)
  if (!styleFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Стиль</h2>
      <div className='flex flex-col gap-2'>
        {styleFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {styleFilter.map((style) => (
                <Checkbox key={style.id} text={style.name} id={style.id} category='style'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {styleFilter.map((style) => (
              <Checkbox key={style.id} text={style.name} id={style.id} category='style'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterStyle