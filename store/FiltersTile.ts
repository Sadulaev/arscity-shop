import { Filters, TileFields } from '@/types/typeTiles'
import { create } from 'zustand'

export type FilterCategory = 'material' | 'room' | 'color' | 'purpose'| 'size' | 'pattern' | 'surface' | 'form' | 'style' | 'collection' | 'country' | 'features'

interface FilterStore { 
    filters: Filters
    addFilter: (category: FilterCategory, value: TileFields) => void
    removeFilter: (category: FilterCategory, value: TileFields) => void 
    setPrice: (min: string, max: string) => void 
    resetFilters: () => void }

export const useFilterStore = create<FilterStore>((set) => ({ 
    filters: { material: [], room: [], color: [], size: [], pattern: [], surface: [], form: [], style: [], collection: [], purpose: [], country: [], features: [], price: { min: '', max: '' } }, 
    addFilter: (category, value) =>
    set((state) => ({
        filters: {
        ...state.filters,
        [category]: [...state.filters[category], value].filter(
            (v, i, self) => self.findIndex(s => s.id === v.id) === i
        )}
    })),
    removeFilter: (category, value) =>
    set((state) => ({
        filters: {
        ...state.filters,
        [category]: state.filters[category].filter((item) => item.id !== value.id)
        }
    })),
    setPrice: (min, max) => 
        set((state) => ({ 
            filters: { 
                ...state.filters, 
                price: { min, max } 
            } 
        })), 
    resetFilters: () => 
        set(() => ({ 
            filters: { 
                material: [], 
                room: [], 
                color: [],
                size: [],
                pattern: [], 
                surface: [],
                style: [],
                collection: [],
                country: [],
                features: [],
                form: [],
                purpose: [], 
                price: { min: '', max: '' } 
            } 
        })) 
    }
))