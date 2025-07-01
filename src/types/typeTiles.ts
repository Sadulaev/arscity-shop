export type TileFields = {
    id: number,
    name: string,
    logo?: string,
}

export type TileTypes = {
    id: number,
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
    size: TileFields,
    style?: TileFields,
    surface?: TileFields,
    form?: TileFields,
    tile_type?: string,
    content_type: string,
}
export type Filters = { 
    material: TileFields[] 
    room: TileFields[] 
    color: TileFields[] 
    size: TileFields[]
    pattern: TileFields[]
    surface: TileFields[]
    form: TileFields[]
    style: TileFields[]
    collection: TileFields[]
    country: TileFields[]
    features: TileFields[]
    purpose: TileFields[] 
    price: { 
        min: string 
        max: string 
    }
}