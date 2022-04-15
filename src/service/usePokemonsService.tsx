import { useEffect, useState } from 'react';
import { Service } from '../interface/Service';
import { Pokemon } from '../interface/Pokemon';

export interface Pokemons {
  results: Pokemon[];
}

type Props = {
  offset: number,
  limit: number,
}

export const useGetPokemonsService = ({ offset, limit }: Props) => {
  const [result, setResult] = useState<Service<Pokemons>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=' + offset + "&limit=" + limit)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        // zapisać link do nexta

        setResult({ status: 'loaded', payload: response })
      } )
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  console.log(result);

  return result;
};

export default useGetPokemonsService;
