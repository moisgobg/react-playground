export interface PaginatedData  {
    count: number;
    next: string;
    previous: null | string;
    results: PaginatedResult[] | null;
}

export interface PaginatedResult {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        back_default: string;
    }
}