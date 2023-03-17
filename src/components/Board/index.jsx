import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { GameDifficultyContext } from "../../context/GameDifficultyContext";
import getCardsBasedOnDifficulty from "../../getCardsBasedOnDifficulty";

function Board(props) {
  const [showRestart, setShowRestart] = useState(false);
  const [difficulty] = useContext(GameDifficultyContext);
  const [cards, setCards] = useState(getCardsBasedOnDifficulty(difficulty));
  const [pairs, setPairs] = useState(0);
  const [flipedCards, setFlipedCards] = useState({ first: null, second: null });

  console.log("resetou");
  console.log(cards);

  useEffect(() => {
    setCards(() => getCardsBasedOnDifficulty(difficulty));
  }, [difficulty]);

  useEffect(() => {
    if (pairs === cards.length) {
      setShowRestart(() => true);
      return;
    }
  }, [pairs]);

  useEffect(() => {
    if (flipedCards.second) {
      if (flipedCards.first.content === flipedCards.second.content) {
        setPairs((prev) => prev + 2);

        setFlipedCards(() => ({ first: null, second: null }));
        return;
      } else {
        setTimeout(() => {
          flipedCards.first.fliped = false;
          flipedCards.second.fliped = false;

          handleFlip(flipedCards.first);
          handleFlip(flipedCards.second);

          setFlipedCards(() => ({ first: null, second: null }));
        }, 1000);
      }
    }
  }, [flipedCards]);

  function handleFlip(card) {
    const newCards = cards.map((c) => (c.id === card.id ? card : c));
    setCards(() => [...newCards]);
  }

  function onChooseCard(card) {
    if (flipedCards.first && flipedCards.second) return;

    if (card.fliped) return;

    card.fliped = true;
    handleFlip(card);

    if (flipedCards.first) {
      setFlipedCards((prev) => ({ ...prev, second: card }));

      return;
    }

    setFlipedCards((prev) => ({ ...prev, first: card }));
  }

  return (
    <>
      <div className="board">
        {cards.map((card, index) => (
          <div
            className={`card ${card.fliped ? "fliped" : ""}`}
            onClick={() => {
              onChooseCard(card);
            }}
            data-card={card.content}
            key={card.id}
          >
            <div className="card-front">🧠</div>
            <div className="card-back">{card.content}</div>
          </div>
        ))}
      </div>
      {
        <button
          className="restartButton"
          onClick={() => {
            cards.forEach((card) => {
              card.fliped = false;
            });

            setTimeout(() => {
              setCards(() => [...getCardsBasedOnDifficulty(difficulty)]);
            }, 400);
            setShowRestart(() => false);
            setPairs(() => 0);
          }}
        >
          Jogar novamente
        </button>
      }
    </>
  );
}

export default Board;
