import React from "react";
import Card from "./Card";

const CardList = ({ cards = [], apply = () => null }) => {
  return cards.length
    ? (
    <div>
      {cards.map((card, idx) => (
        <Card 
          item={card}
          key={idx}
          idx={idx}
          apply={apply}
        />
      ))}
    </div> )
    : ( <p>No Results.</p> )
}

export default CardList;