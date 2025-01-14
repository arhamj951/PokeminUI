import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ElementalCard = ({ elementalObj }) => {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/pokiInfo");
  };

  return (
    <div className="elemental-card">
      <div className="elemental-card-inner">
        <div className="elemental-card-front">
          <div>
            <img
              onClick={onclickHandler}
              className="elemental-card-img"
              src={elementalObj.image}
              alt={`elemental-${elementalObj.elementName}`}
            />
          </div>
        </div>
        {/* <div className="elemental-card-back">backside of the card</div> */}
      </div>
    </div>
  );
};

export default ElementalCard;
