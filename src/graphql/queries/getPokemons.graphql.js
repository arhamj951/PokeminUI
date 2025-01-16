import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemon_v2_pokemon(limit: $first) {
      id
      name
    }
  }
`;

//   pokemon_v2_pokemon(limit: 100) {
//     id
//     name
//     pokemon_species_id

//   }

export default GET_POKEMONS;
