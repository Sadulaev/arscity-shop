import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type PurposeFilterProps = {
    purposeFilter?: DataFilters[]
}


const FilterPurpose:React.FC<PurposeFilterProps> = ({purposeFilter}) => {

  const [show, setShow] = useState(false)

  if (!purposeFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Назначение</h2>
      <div className='flex flex-col gap-2'>
        {purposeFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {purposeFilter.map((purpos) => (
                <Checkbox key={purpos.id} text={purpos.name} id={purpos.id} category='purpose'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {purposeFilter.map((purpos) => (
              <Checkbox key={purpos.id} text={purpos.name} id={purpos.id} category='purpose'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterPurpose