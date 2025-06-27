// // import React from 'react'
// // import Checkbox from '@/components/ui/checkbox'
// // import { DataFilters } from '../filters-tile'
// // import { LaminateFieldsType } from '@/types/typeLaminate'

// // type FiltersLaminateType = {
// //   filtersFields?: LaminateFieldsType[]
// // }

// // const FiltersLaminate:React.FC<FiltersLaminateType> = ({filters, title}) => {

// //   if (!filters) return null

// //   return (
// //     <div>
// //       <h2 className='mb-4 text-[1.5rem]'>{title}</h2>
// //       <div className='flex flex-col gap-2'>
// //         {filters.map((filter) => (
// //           <Checkbox key={filter.id} text={filter.name} id={filter.id} category="material" />
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default FiltersLaminate

// import React from 'react'
// import Checkbox from '@/components/ui/checkbox-laminate'
// import { LaminateFieldsType } from '@/types/typeLaminate'
// import { FilterCategory } from '../../../../store/FiltersLaminate'

// type FiltersLaminateType = {
//   filters?: LaminateFieldsType[]
//   title: string
//   category: FilterCategory
// }

// const FiltersLaminate: React.FC<FiltersLaminateType> = ({ filters, title, category }) => {
//   if (!filters) return null

//   return (
//     <div>
//       <h2 className='mb-4 text-[1.5rem]'>{title}</h2>
//       <div className='flex flex-col gap-2'>
//         {filters.map((filter) => (
//           <Checkbox key={filter.id} text={filter.name} id={filter.id} category={category} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default FiltersLaminate