import React from "react";
import "../App.css";

const PokemonCard = ({ name, image, typeColor }) => {
  console.log(typeColor);
  return (
    <div className="pokemon-card">
      <div className="elemental-card-inner">
        <div
          style={{ backgroundColor: ` ${typeColor}` }}
          className="pokemon-card-front"
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "30px",
                paddingRight: "20px",
              }}
            >
              <p>{name}</p>
            </div>
            <img className="pokemon-card-img" src={image} alt={`${name}-img`} />
          </div>
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
