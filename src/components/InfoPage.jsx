import React from "react";
import "../App.css";
import PokemonCard from "./PokemonCard";
import { useQuery } from "@apollo/client";
import GET_POKEMONS_BY_ELEMENTAL from "../graphql/queries/getPokemonsByElemental.graphql";
import LoadingSpinner from "./LoadingSpinner";

const cardColors = {
  water: " #a5cde8",
  fire: " #e87d63",
  ground: " #a07544",
  electric: " #e8c563",
  grass: " #B9D687",
  dark: " #779ecb",
  steel: " #999999",
  flying: " #cdcdcd",
  ice: " #AEECF2",
  psychic: " #7A6AA9",
  fairy: " #FFA9B9",
};
const InfoPage = () => {
  const { loading, data } = useQuery(GET_POKEMONS_BY_ELEMENTAL, {
    variables: { typeName: `${window.location.pathname.replace("/", "")}` },
  });

  return (
    <div className="homepage">
      {loading ? (
        <LoadingSpinner />
      ) : (
        data &&
        data.pokemon_v2_pokemon.map((pokemon) => (
          <PokemonCard
            typeColor={cardColors[window.location.pathname.replace("/", "")]}
            key={`pokemon-${pokemon.id}`}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
        ))
      )}
    </div>
  );
};

export default InfoPage;
