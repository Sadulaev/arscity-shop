export type TileFields = {
    id: number,
    name: string,
}

export type TileTypes = {
    id?: number,
    category?: string,
    collection?: TileFields,
    color?: TileFields,
    country: TileFields,
    description?: string,
    features?: TileFields,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string,
    image5?: string,
    is_new?: boolean,
    is_promo?: boolean,
    is_large_format?: boolean,
    material?: TileFields,
    name: string,
    pattern?: TileFields,
    price: number,
    purpose?: TileFields,
    room?: TileFields,
    shape?: TileFields,
    size?: TileFields,
    style?: TileFields,
    surface?: TileFields,
}
export type Filters = { 
    thickness: TileFields[],
    grades: TileFields[], 
    countries: TileFields[],
    chamfers: TileFields[], 
    water_resistances: TileFields[],
    laminate_patterns: TileFields[], 
    tones: TileFields[], 
    wood_types: TileFields[], 
    gloss: TileFields[], 
    width: TileFields[], 
    textures: TileFields[], 
    constructions: TileFields[], 
    connection_types: TileFields[]
    price: { 
        min: string 
        max: string 
    }
}
