import { createContext, useContext } from "react";
import { Pokemon } from "../interface/Pokemon";

export type DetailsContent = {
    pokemon: Pokemon,
    setPokemon: (pokemon: Pokemon) => void
  }
  
export const DetailsWindowContext = createContext<DetailsContent>({
  pokemon: {
    abilities: [],
    base_expirience: 0,
    height: 0,
    id: 0,
    name: "",
    sprite: "",
    types: [],
    weight: 0,
  },
  setPokemon: () => {}
})
  
export const useDetailsWindowContext = () => useContext(DetailsWindowContext);