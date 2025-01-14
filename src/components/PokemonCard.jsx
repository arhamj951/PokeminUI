import React from "react";
import "../App.css";

const PokemonCard = () => {
  return (
    <div className="pokemon-card">
      <div className="elemental-card-inner">
        <div className="elemental-card-front">
          <div>front side</div>
        </div>
        <div className="pokemon-card-back">
          <img
            className="elemental-card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NlXGsMg75Drkwm0d-NH-LK0PoifPfs88Rg&s"
            alt="pokemon-backside"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
