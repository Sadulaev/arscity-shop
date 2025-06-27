import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type PatternFilterProps = {
    patternFilter?: DataFilters[]
}

const FilterTilePattern:React.FC<PatternFilterProps> = ({patternFilter}) => {

  const [show, setShow] = useState(false)
  if (!patternFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Рисунок плитки</h2>
      <div className='flex flex-col gap-2'>
        {patternFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {patternFilter.map((pattern) => (
                <Checkbox key={pattern.id} text={pattern.name} id={pattern.id} category='pattern'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {patternFilter.map((pattern) => (
              <Checkbox key={pattern.id} text={pattern.name} id={pattern.id} category='pattern'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterTilePattern