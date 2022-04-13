import React from 'react';
import useStarshipsService from '../../service/usePokemonService';

const Pokemons: React.FC<{}> = () => {
  const service = useStarshipsService()

  return (
    <>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map((pokemon: any) => (
            <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Pokemons;