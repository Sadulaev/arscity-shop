import { Filters, TileFields } from '@/types/typeLaminate'
import { create } from 'zustand'

export type FilterCategory = 'thickness' | "grades" | 'countries' | "chamfers" | "water_resistances" |'laminate_patterns' | "tones" | 'wood_types' | "gloss" |'width' | "textures" | 'constructions' | "connection_types"

interface FilterStore { 
    filters: Filters
    addFilter: (category: FilterCategory, value: TileFields) => void
    removeFilter: (category: FilterCategory, value: TileFields) => void 
    setPrice: (min: string, max: string) => void 
    resetFilters: () => void }

export const useFilterStore = create<FilterStore>((set) => ({ 
    filters: { thickness: [], grades: [], countries: [], chamfers: [], water_resistances: [], laminate_patterns: [], tones: [], wood_types: [], gloss: [], width: [], textures: [], constructions: [], connection_types: [], price: { min: '', max: '' } }, 
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
                thickness: [],
                grades: [],
                countries: [],
                chamfers: [],
                water_resistances: [],
                laminate_patterns: [],
                tones: [],
                wood_types: [],
                gloss: [],
                width: [],
                textures: [], 
                constructions: [], 
                connection_types: [],
                price: { min: '', max: '' } 
            } 
        })) 
    }
))