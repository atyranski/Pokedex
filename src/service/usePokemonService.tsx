import { useEffect, useState } from 'react';
import { Service } from '../interface/Service';
import { Pokemon } from '../interface/Pokemon';


export const useGetPokemonService = ( pokemon: Pokemon) => {
  const [result, setResult] = useState<Service<Pokemon>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        const newPokemon: Pokemon = {
          id: response.id,
          name: response.name,
          base_expirience: response.base_experience,
          height: response.height,
          weight: response.weight,
          abilities: response.abilities.map((ability: any) => {
            return ability.ability.name;
          }),
          sprite: response.sprites.front_default,
          types: response.types.map((type: any) => {
            return type.type.name;
          }),
        }
        // setResult({ status: 'loaded', payload: response })
        // console.log(newPokemon);
        setResult({ status: 'loaded', payload: newPokemon })
      } )
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useGetPokemonService;
