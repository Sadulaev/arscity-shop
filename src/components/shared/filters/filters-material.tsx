import React from 'react'
import Checkbox from '@/components/ui/checkbox'
import { DataFilters } from '../filters-tile'

type MaterialFilterProps = {
  materialFilter?: DataFilters[]
}

const FiltersMaterial:React.FC<MaterialFilterProps> = ({materialFilter}) => {

  if (!materialFilter) return null

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Материал</h2>
      <div className='flex flex-col gap-2'>
        {materialFilter.map((material) => (
          <Checkbox key={material.id} text={material.name} id={material.id} category="material" />
        ))}
      </div>
    </div>
  )
}

export default FiltersMaterial