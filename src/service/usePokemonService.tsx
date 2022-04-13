import { useEffect, useState } from 'react';
import { Service } from '../interface/Service';
import { Pokemon } from '../interface/Pokemon';

export interface Pokemons {
    results: Pokemon[];
  }

export interface PokemonAPI {
    name: string;
    url: string;
}

const usePostStarshipService = () => {
  const [result, setResult] = useState<Service<Pokemons>>({
    status: 'loading'
  });

  const pokemons_list: Pokemon[] = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response_all => response_all.json())
    //   .then(response_all => {
    //     const pokemons = response_all.results;
    //     //   console.log(pokemons);

    //     pokemons.map((pokemon: PokemonAPI) => {
    //         fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemon.name)
    //             .then(response_particular => response_particular.json())
    //             .then(response_particular => {
    //                 // console.log(response_particular);

    //                 const abilities: string[] = [];
    //                 response_particular.abilities.map((ability: any) => abilities.push(ability.name));

    //                 const types: string[] = [];
    //                 response_particular.types.map((type: any) => types.push(type.type.name));

    //                 const newPokemon: Pokemon = {
    //                     id: response_particular.id,
    //                     name: response_particular.name,
    //                     base_expirience: response_particular.base_expirience,
    //                     height: response_particular.height,
    //                     weight: response_particular.weight,
    //                     abilities: abilities,
    //                     type: types,
    //                     sprite: response_particular.sprites.front_default,
    //                 }

    //                 pokemons_list.push(newPokemon);
    //             })
    //       })

    //       setResult({ status: 'loaded', payload: pokemons_list})

    //   })
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostStarshipService;
