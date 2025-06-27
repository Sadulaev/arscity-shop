import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type FormFilterProps = {
    formFilter?: DataFilters[]
}

const FilterForm:React.FC<FormFilterProps> = ({formFilter}) => {
  
  const [show, setShow] = useState(false)
  if (!formFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Форма</h2>
      <div className='flex flex-col gap-2'>
        {formFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {formFilter.map((form) => (
                <Checkbox key={form.id} text={form.name} id={form.id} category='form'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {formFilter.map((form) => (
              <Checkbox key={form.id} text={form.name} id={form.id} category='form'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterForm