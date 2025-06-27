import React from 'react'
import Checkbox from '@/components/ui/checkbox'

const FilterNew = () => {
  const materials = ["Керамическая плитка", "Керамогранит", "Мрамор", "Гранит"]

  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>Материал</h2>
      <div className='flex flex-col gap-2'>
        {materials.map((material, index) => (
          <Checkbox key={index} text={material} />
        ))}
      </div>
    </div>
  )
}

export default FilterNew