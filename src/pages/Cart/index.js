import { Container } from "@mui/system";
import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { pokemons } from "../Home";

const Cart =() => {
  return (
    
    <div>
      <h2>Carrinho</h2>
      <ul>
        {pokemons.map((pokemon)=> (
          <Container>
          <PokemonCard id={pokemon.data.id} />
          <>{pokemon.price}</>
          <button>+</button>
          <button>-</button>

          </Container>

        ))}
        
      </ul>
    </div>
  )
}


export default Cart