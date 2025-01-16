import React from "react";
import ElementalCard from "./elementalCard";

const elementalCards = [
  {
    id: "1",
    elementName: "water",
    color: " #a5cde8",
    image:
      "https://img.dextcg.com/_/w:3840/plain/https%3A%2F%2Fstatic.dextcg.com%2Fcards%2Ftk4a%2F2.png",
  },
  {
    id: "2",
    elementName: "fire",
    color: " #e87d63",
    image:
      "https://img.dextcg.com/_/w:3840/plain/https%3A%2F%2Fstatic.dextcg.com%2Fcards%2Fuen7%2F2.png",
  },
  {
    id: "3",
    elementName: "ground",
    color: " #a07544",
    image: "https://asia.pokemon-card.com/my/card-img/default00002433.png",
  },
  {
    id: "4",
    elementName: "electric",
    color: " #e8c563",
    image:
      "https://tcgplayer-cdn.tcgplayer.com/product/264250_in_1000x1000.jpg",
  },
  {
    id: "5",
    elementName: "grass",
    color: " #B9D687",
    image: "https://m.media-amazon.com/images/I/41b7v3aIE7L.jpg",
  },
  {
    id: "6",
    elementName: "dark",
    color: " #779ecb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE3NsmncwLfT6Qn2L3eett8nGTNyYswpt-Q&s",
  },
  {
    id: "7",
    elementName: "steel",
    color: " #999999",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkzTvs5Lp8CjWWedLSqPgGmrnRLNxFafFyg&s",
  },
  {
    id: "8",
    elementName: "flying",
    color: " #cdcdcd",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3c54c95-8c44-4e5b-93ae-389fe559bcbf/d3b403a-087815db-431c-43cf-afd9-c84f44bf9c79.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzYzU0Yzk1LThjNDQtNGU1Yi05M2FlLTM4OWZlNTU5YmNiZlwvZDNiNDAzYS0wODc4MTVkYi00MzFjLTQzY2YtYWZkOS1jODRmNDRiZjljNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.izqUcleaoLov5baoFphycztShQLMf7nSBIKTVeG1lbA",
  },
  {
    id: "9",
    elementName: "ice",
    color: " #AEECF2",
    image:
      "https://i.pinimg.com/736x/f9/3a/8b/f93a8bd768d10432d954d237a6a0d0ce.jpg",
  },
  {
    id: "10",
    elementName: "psychic",
    color: " #7A6AA9",
    image:
      "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY1/XY1_EN_136.png",
  },
  {
    id: "11",
    elementName: "fairy",
    color: " #FFA9B9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjciCwbcqHGqdjvnVSQ1n3NZu2rIiqidQp3g&s",
  },
];

const HomePage = ({ setSetTypeClicked, setTypeColor }) => {
  return (
    <div className="homepage">
      {elementalCards.map((elementalCard) => (
        <ElementalCard
          setTypeColor={setTypeColor}
          setSetTypeClicked={setSetTypeClicked}
          elementalObj={elementalCard}
        />
      ))}
    </div>
  );
};

export default HomePage;
