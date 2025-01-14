import React from "react";
import ElementalCard from "./elementalCard";

const elementalCards = [
  {
    elementName: "water",
    image:
      "https://img.dextcg.com/_/w:3840/plain/https%3A%2F%2Fstatic.dextcg.com%2Fcards%2Ftk4a%2F2.png",
  },
  {
    elementName: "fire",
    image:
      "https://img.dextcg.com/_/w:3840/plain/https%3A%2F%2Fstatic.dextcg.com%2Fcards%2Fuen7%2F2.png",
  },
  {
    elementName: "earth",
    image: "https://asia.pokemon-card.com/my/card-img/default00002433.png",
  },
  {
    elementName: "lightning",
    image:
      "https://tcgplayer-cdn.tcgplayer.com/product/264250_in_1000x1000.jpg",
  },
  {
    elementName: "grass",
    image: "https://m.media-amazon.com/images/I/41b7v3aIE7L.jpg",
  },
  {
    elementName: "dark",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE3NsmncwLfT6Qn2L3eett8nGTNyYswpt-Q&s",
  },
  {
    elementName: "metal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkzTvs5Lp8CjWWedLSqPgGmrnRLNxFafFyg&s",
  },
  {
    elementName: "air",
    image:
      "https://pm1.aminoapps.com/6529/4f6dc0f5fc323fe582ffaaa87ff40badb5440953_00.jpg",
  },
  {
    elementName: "ice",
    image:
      "https://i.pinimg.com/736x/f9/3a/8b/f93a8bd768d10432d954d237a6a0d0ce.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {elementalCards.map((elementalCard) => (
        <ElementalCard elementalObj={elementalCard} />
      ))}
    </div>
  );
};

export default HomePage;
