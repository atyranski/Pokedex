import { useEffect, useState } from 'react';
import { Service } from '../interface/Service';
import { Pokemon } from '../interface/Pokemon';

export interface Pokemons {
    results: Pokemon[];
  }

export const useGetPokemonsService = () => {
  const [result, setResult] = useState<Service<Pokemons>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response_all => response_all.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useGetPokemonsService;
