// import { create } from 'zustand'

// export type FilterCategory = 'material' | 'room' | 'color' | 'purpose'

// type Filters = { material: string[] 
//     room: string[] 
//     color: string[] 
//     purpose: string[] 
//     price: { 
//         min: string 
//         max: string 
//     }
// }

// interface FilterStore { filters: Filters
//     addFilter: (category: FilterCategory, value: string) => void
//     removeFilter: (category: FilterCategory, value: string) => void 
//     setPrice: (min: string, max: string) => void 
//     resetFilters: () => void }

// export const useFilterStore = create<FilterStore>((set) => ({ 
//     filters: { material: [], room: [], color: [], purpose: [], price: { min: '', max: '' } }, 
//     addFilter: (category, value) => 
//         set((state) => ({ 
//             filters: { 
//                 ...state.filters,
//                 [category]: [...new Set([...state.filters[category], value])] 
//             }
//         })),
//     removeFilter: (category, value) => 
//         set((state) => ({ 
//             filters: { 
//                 ...state.filters, 
//                 [category]: state.filters[category].filter((item) => item !== value)
//             }
//         })),
//     setPrice: (min, max) => 
//         set((state) => ({ 
//             filters: { 
//                 ...state.filters, 
//                 price: { min, max } 
//             } 
//         })), 
//     resetFilters: () => 
//         set(() => ({ 
//             filters: { 
//                 material: [], 
//                 room: [], 
//                 color: [], 
//                 purpose: [], 
//                 price: { min: '', max: '' } 
//             } 
//         })) 
//     }
// ))

// // components/Checkbox.tsx 'use client' import React from 'react' import { useFilterStore, FilterCategory } from '@/store/filter-store'

// interface Props { 
//     text: string 
//     category: FilterCategory 
// }

// const Checkbox: React.FC<Props> = ({ text, category }) => { 
//     const { filters, addFilter, removeFilter } = useFilterStore() 
//     const isChecked = filters[category].includes(text)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
//         const checked = e.target.checked 
//         if (checked) addFilter(category, text) 
//         else removeFilter(category, text) 
//     }

//     return ( 
//     <label htmlFor={text} className="flex gap-3 items-center"> 
//         <input
//             type="checkbox"
//             id={text}
//             className="hidden"
//             checked={isChecked}
//             onChange={handleChange}
//         />
//         <div className={w-[20px] h-[20px] border rounded-[2px] ${isChecked ? 'bg-red-700' : ''}}></div>
//         <span className={${isChecked ? 'text-red-700 font-bold' : 'text-gray-700'}}>{text}</span> 
//     </label> 
//     ) 
// }

// export default Checkbox

// // components/FiltersMaterial.tsx 'use client' import Checkbox from '@/components/ui/checkbox' import React from 'react'

// const materials = ['Керамическая плитка', 'Керамогранит', 'Мрамор', 'Гранит']

// const FiltersMaterial = () => { 
//     return ( 
//     <div> 
//         <h2 className='mb-4 text-[1.5rem]'>Материал</h2> 
//         <div className='flex flex-col gap-2'> {materials.map((material, index) => ( <Checkbox key={index} category="material" text={material} /> ))} </div> 
//     </div> 
//     ) 
// }

// export default FiltersMaterial

// // components/shared/FiltersTile.tsx 'use client' import { X } from 'lucide-react' import React from 'react' import FiltersMaterial from './filters/filters-material' import FiltersRoom from './filters/filters-room' import { useFilterStore } from '@/store/filter-store'

// const FiltersTile = () => { const { resetFilters, filters, setPrice } = useFilterStore()

// return ( <div className='flex flex-col gap-5'> <div className='flex items-center gap-3'> <span>Фильтры</span> <div onClick={resetFilters} className='flex items-center gap-2 cursor-pointer'> <span>Сбросить</span> <X size={16} color='red' /> </div> </div>

// <div className='flex flex-col gap-3'>
//     <span className='text-[1.5rem]'>Цена</span>
//     <div className='flex gap-4'>
//       <input
//         className='w-[70px] h-[20px] pl-2 border-b focus:outline-none'
//         type='text'
//         placeholder='от'
//         value={filters.price.min}
//         onChange={(e) => setPrice(e.target.value, filters.price.max)}
//       />
//       <input
//         className='w-[70px] h-[20px] pl-2 border-b focus:outline-none'
//         type='text'
//         placeholder='до'
//         value={filters.price.max}
//         onChange={(e) => setPrice(filters.price.min, e.target.value)}
//       />
//     </div>
//   </div>

//   <FiltersMaterial />
//   <FiltersRoom />
//     </div>

// ) }

// export default FiltersTile

// // components/Products.tsx 'use client' import FiltersTile from '@/components/shared/filters-tile' import React, { useEffect } from 'react' import { useFilterStore } from '@/store/filter-store'

// const Products = () => { const { filters } = useFilterStore()

// useEffect(() => { const query = new URLSearchParams() Object.entries(filters).forEach(([key, values]) => { if (key === 'price') { if (filters.price.min) query.append('price_min', filters.price.min) if (filters.price.max) query.append('price_max', filters.price.max) } else if ((values as string[]).length > 0) { query.append(key, (values as string[]).join(',')) } })

// const queryString = query.toString()
// console.log('Query to server:', queryString)
// // fetch(`/api/products?${queryString}`)

// }, [filters])

// return ( <div className='flex gap-5 w-[1370px] h-[1000px] mx-auto mt-10 px-12 pt-5'> <div className='pr-2 w-[25%]'> <FiltersTile /> </div> <div>Products</div> </div> ) }

// export default Products