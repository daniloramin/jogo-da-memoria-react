import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { GameDifficultyContext } from "../../context/GameDifficultyContext";
import getCardsBasedOnDifficulty from "../../getCardsBasedOnDifficulty";

function Board(props) {
  const [difficulty] = useContext(GameDifficultyContext);
  const [cards, setCards] = useState(getCardsBasedOnDifficulty(difficulty));
  const pairs = [];
  let flipedCards = [];

  useEffect(() => {
    setCards(() => getCardsBasedOnDifficulty(difficulty));
  }, [difficulty]);

  function onChooseCard({ target }) {
    console.log(pairs);
    const card = target.parentElement;

    if (
      (flipedCards.length === 1 && card === flipedCards[0]) ||
      pairs.includes(card)
    )
      return;

    if (flipedCards.length === 2) return;

    if (pairs.length === cards.length) return; // win screen

    console.log("passou");

    card.className = "card fliped";

    if (flipedCards.length === 1) {
      flipedCards.push(card);
      console.log(flipedCards[0]);
      console.log(flipedCards[1]);

      if (flipedCards[0].dataset.card === flipedCards[1].dataset.card) {
        pairs.push(flipedCards[0], flipedCards[1]);
        flipedCards = [];
        return;
      }

      setTimeout(() => {
        flipedCards[0].className = "card";
        flipedCards[1].className = "card";
        flipedCards = [];
      }, 1000);

      return;
    }

    flipedCards.push(card);
  }

  return (
    <div className="board">
      {cards.map((card, index) => (
        <div
          className="card"
          onClick={onChooseCard}
          data-card={card}
          key={index}
        >
          <div className="card-front">🧠</div>
          <div className="card-back">{card}</div>
        </div>
      ))}
    </div>
  );
}

export default Board;
