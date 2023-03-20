import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { GameDifficultyContext } from "../../context/GameDifficultyContext";
import getCardsBasedOnDifficulty from "../../getCardsBasedOnDifficulty";
import Card from "../Card";
import Timer from "../Timer";
import MovementsCounter from "../MovementsCounter";

function Board(props) {
  const [difficulty] = useContext(GameDifficultyContext);
  const [cards, setCards] = useState(getCardsBasedOnDifficulty(difficulty));
  const [pairs, setPairs] = useState(0);
  const [flipedCards, setFlipedCards] = useState({ first: null, second: null });
  const [playing, setPlaying] = useState(false);
  const [movements, setMovements] = useState(0);
  const [win, setWin] = useState(false);

  console.log("resetou");
  console.log(cards);

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  useEffect(() => {
    if (pairs === cards.length) {
      setWin(() => true);
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

  function resetGame() {
    setCards(() => [...getCardsBasedOnDifficulty(difficulty)]);
    setPairs(() => 0);
    setPlaying(() => false);
    setWin(() => false);
  }

  function onChooseCard(card) {
    if (flipedCards.first && flipedCards.second) return;

    if (card.fliped) return;

    card.fliped = true;
    handleFlip(card);

    if (playing === false) {
      setPlaying(() => true);
    }

    setMovements((prev) => prev + 1);

    if (flipedCards.first) {
      setFlipedCards((prev) => ({ ...prev, second: card }));

      return;
    }

    setFlipedCards((prev) => ({ ...prev, first: card }));
  }

  return (
    <>
      <div className="board">
        <div className="timer-movements">
          <Timer playing={playing} win={win} />
          <MovementsCounter
            playing={playing}
            movements={movements}
            setMovements={setMovements}
            win={win}
          />
        </div>
        <div className="game">
          {cards.map((card, index) => (
            <Card card={card} onChooseCard={onChooseCard} />
          ))}
        </div>
        {win && (
          <button
            className="restartButton"
            onClick={() => {
              resetGame();
            }}
          >
            Jogar novamente
          </button>
        )}
      </div>
    </>
  );
}

export default Board;
