import React, { useState } from 'react'
import Checkbox from '@/components/ui/checkbox'

import { DataFilters } from "../filters-tile"


type FeatureFilterProps = {
    featureFilter?: DataFilters[]
}

const FilterFeatures:React.FC<FeatureFilterProps> = ({featureFilter}) => {
  
  const [show, setShow] = useState(false)
  if (!featureFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Особенности</h2>
      <div className='flex flex-col gap-2'>
        {featureFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {featureFilter.map((feature) => (
                <Checkbox key={feature.id} text={feature.name} id={feature.id} category='features'/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {featureFilter.map((feature) => (
              <Checkbox key={feature.id} text={feature.name} id={feature.id} category='features'/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FilterFeatures