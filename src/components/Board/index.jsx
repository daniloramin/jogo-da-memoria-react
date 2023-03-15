import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { GameDifficultyContext } from "../../context/GameDifficultyContext";
import getCardsBasedOnDifficulty from "../../getCardsBasedOnDifficulty";

function Board(props) {
  const [showRestart, setShowRestart] = useState(false);
  const [difficulty] = useContext(GameDifficultyContext);
  const [cards, setCards] = useState(getCardsBasedOnDifficulty(difficulty));
  const [pairs, setPairs] = useState(0);
  let flipedCards = [];

  useEffect(() => {
    setCards(() => getCardsBasedOnDifficulty(difficulty));
  }, [difficulty]);

  useEffect(() => {
    if (pairs === cards.length) {
      setShowRestart(() => true);
      return;
    }
  }, [pairs]);

  function onChooseCard({ target }) {
    const card = target.parentElement;

    if (
      (flipedCards.length === 1 && card === flipedCards[0]) ||
      pairs === cards.length
    )
      return;

    console.log("nao verificou");

    if (flipedCards.length === 2) return;

    card.className = "card fliped";

    if (flipedCards.length === 1) {
      flipedCards.push(card);

      if (flipedCards[0].dataset.card === flipedCards[1].dataset.card) {
        setPairs((prev) => prev + 2);

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
    <>
      <div className="board">
        {cards.map((card, index) => (
          <div
            className="card unfliped"
            onClick={onChooseCard}
            data-card={card}
            key={index}
          >
            <div className="card-front">🧠</div>
            <div className="card-back">{card}</div>
          </div>
        ))}
      </div>
      {showRestart && (
        <button
          className="restartButton"
          onClick={() => {
            // setCards(() => {
            //   console.log("primeiro vazio");
            //   return [];
            // });

            setCards(() => {
              console.log("segundo cheio");
              return getCardsBasedOnDifficulty(difficulty);
            });
          }}
        >
          X
        </button>
      )}
    </>
  );
}

export default Board;
