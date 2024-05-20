
import './App.css';
import { Input } from '@/components/ui/input';
import usePokemonData from './hooks/usePokemonData';
import PokemonList from './components/Container/PokemonList.tsx';


function App() {
  const { data, error, loading } = usePokemonData();

  if (loading) {
    return <p>Loading pokemon data..</p>
  }

  if (error) { return <p>An error has occured loading pokemon data..</p> }

  return (
    <>
      <h1>React App</h1>
      <Input placeholder='simple input' />
      <PokemonList pokemons={data?.results} />
    </>
  )
}

export default App
