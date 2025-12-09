// rafce

import { useEffect, useState } from "react";

// 1. Type oluştur
type Pokemon = {
  id: number;
  name: string;
};

const App = () => {
  // 2. usss oluştur
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // 3. uffs oluştur
  useEffect(() => {
    const API_URL = `https://pokeapi.co/api/v2/pokemon`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const newPokemons = json.results.map((pokemon, i) => ({
          id: i + 1,
          name: pokemon.name,
        }));
        setPokemons(newPokemons);
      });
  }, []);

  // 4. listele
  return (
    <div>
      {pokemons.length === 0 && <span>Loading...</span>}
      {pokemons.map((pokemon) => {
        const id = pokemon.id;
        const name = pokemon.name;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return (
          <div className="flex items-center gap-4 m-4 p-4 shadow border-1 border-slate-100 rounded-lg">
            <img src={image} className="w-12 h-12" />
            <span className="text-2xl">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
