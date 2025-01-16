import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemon_v2_pokemon(limit: $first) {
      id
      name
    }
  }
`;

export default GET_POKEMONS;
