import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type CountryFilterProps = {
    countryFilter?: DataFilters[]
}


const FilterCountry:React.FC<CountryFilterProps> = ({countryFilter}) => {

  const [show, setShow] = useState(false)
  if (!countryFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Страна</h2>
      <div className='flex flex-col gap-2'>
        {countryFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {countryFilter.map((country) => (
                <Checkbox key={country.id} text={country.name} id={country.id} category='purpose'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {countryFilter.map((country) => (
              <Checkbox key={country.id} text={country.name} id={country.id} category='purpose'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterCountry