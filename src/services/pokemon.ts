export const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemon = async () => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`HTTP Error, status ${response.status}`);
        }
        return response.json();
    } catch (error) {
        const e = error as { message: string };
        throw new Error(e.message);
    }
}

export const getPokemonByUrl = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error, status ${response.status}`);
        }
        return response.json();
    } catch (error) {
        const e = error as { message: string };
        throw new Error(e.message);
    }
}

export const getPokemonById = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP Error, status ${response.status}`);
        }
        return response.json();
    } catch (error) {
        const e = error as { message: string };
        throw new Error(e.message);
    }
}

