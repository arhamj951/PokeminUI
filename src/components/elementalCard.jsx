import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ElementalCard = ({ elementalObj, setSetTypeClicked, setTypeColor }) => {
  const navigate = useNavigate();

  const onclickHandler = () => {
    console.log(elementalObj.elementName);
    setSetTypeClicked(elementalObj.elementName);
    setTypeColor(elementalObj.color);
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
