import React from "react";
import "../App.css";
import PokemonCard from "./PokemonCard";
import { useQuery } from "@apollo/client";
import GET_POKEMONS_BY_ELEMENTAL from "../graphql/queries/getPokemonsByElemental.graphql";
import LoadingSpinner from "./LoadingSpinner";

const InfoPage = ({ typeClicked, typeColor }) => {
  const { loading, error, data } = useQuery(GET_POKEMONS_BY_ELEMENTAL, {
    variables: { typeName: `${typeClicked}` },
  });

  console.log(data);

  return (
    <div className="homepage">
      {loading ? (
        <LoadingSpinner />
      ) : (
        data &&
        data.pokemon_v2_pokemon.map((pokemon) => (
          <PokemonCard
            typeColor={typeColor}
            key={pokemon.id}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          ></PokemonCard>
        ))
      )}
    </div>
  );
};

export default InfoPage;
