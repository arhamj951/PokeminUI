import { gql } from "@apollo/client";

const GET_POKEMONS_BY_ELEMENTAL = gql`
  query waterTypePokemons($typeName: String) {
    pokemon_v2_pokemon(
      where: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _eq: $typeName } }
        }
      }
    ) {
      id
      name
      pokemon_species_id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export default GET_POKEMONS_BY_ELEMENTAL;
