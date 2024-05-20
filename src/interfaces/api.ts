export interface PaginatedData  {
    count: number;
    next: string;
    previous: null | string;
    results: PaginatedResult[];
}

export interface PaginatedResult {
    name: string;
    url: string;
}

export interface Pokemon {
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    weight: number;
    sprites: Sprites;
}

export interface Sprites {
    back_default: string;
    front_default: string;
}