import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  console.log(cards)
  return cards.length > 0
    ? (
    <div>
      {cards.map((card, idx) => (
        <Card 
          item={card}
          key={idx}
        />
      ))}
    </div> )
    : ( <p>No Results.</p> )
}

export default CardList;