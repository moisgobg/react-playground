
import './App.css';
import { Input } from '@/components/ui/input';
import usePokemonData from './hooks/usePokemonData';
import PokemonList from './components/Container/PokemonList.tsx';
import { useMemo, useState } from 'react';


function App() {
  const { data, error, loading} = usePokemonData();
  const [name, setName] = useState<string>("");

  const handleInputChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setName(value);
  };

  const filtered = useMemo(
    () => (data ? data.results.filter((item) => item.name.includes(name)) : []),
    [data, name]
  );

  if (!data) return <p>No results</p>

  if (loading) {
    return <p>Loading pokemon data..</p>
  }

  if (error) { return <p>An error has occured loading pokemon data..</p> }

  return (
    <>
      <h1>React App</h1>
      <Input placeholder='simple input' onInput={handleInputChange}/>
      <PokemonList pokemons={filtered} />
    </>
  )
}

export default App
