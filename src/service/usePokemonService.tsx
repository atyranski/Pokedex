import { useEffect, useState } from 'react';
import { Service } from '../interface/Service';
import { Pokemon } from '../interface/Pokemon';


export const useGetPokemonService = ( pokemon: Pokemon) => {
  const [result, setResult] = useState<Service<Pokemon>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
      .then(response_all => response_all.json())
      .then(response => {
        console.log(response);
        const newPokemon: Pokemon = {
            id: response.id,
            name: response.name,
            base_expirience: response.base_expirience,
            height: response.height,
            weight: response.weight,
            abilities: [],
            type: [],
            sprite: ''
        }
        setResult({ status: 'loaded', payload: response })
      } )
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useGetPokemonService;
