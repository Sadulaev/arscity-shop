export type TileFields = {
    id: number,
    name: string,
}

export type LaminateTypes = {
    id: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    quadrature: string,
    package_volume: string,
    boards_in_packaging: TileFields,
    board_dimensions: TileFields,
    package_weight: string,
    color: TileFields,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    image5: string,
    category: string,
    country: TileFields,
    grade: TileFields,
    thickness: TileFields,
    chamfer: TileFields,
    water_resistance: TileFields,
    laminate_pattern: TileFields,
    tone: TileFields,
    wood_type: TileFields,
    gloss: TileFields,
    width: TileFields
    texture: TileFields,
    is_substrate: boolean,
    construction: TileFields,
    connection_type: TileFields,
    is_promo: boolean
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
