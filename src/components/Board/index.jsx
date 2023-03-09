import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { GameDifficultyContext } from "../../context/GameDifficultyContext";
import getCardsBasedOnDifficulty from "../../getCardsBasedOnDifficulty";

function Board(props) {
  const [difficulty] = useContext(GameDifficultyContext);
  const [cards, setCards] = useState(getCardsBasedOnDifficulty(difficulty));

  useEffect(() => {
    setCards(() => getCardsBasedOnDifficulty(difficulty));
  }, [difficulty]);

  return (
    <div className="board">
      {cards.map((card, index) => (
        <div className="card" data-card={card} key={index}>
          <div className="card-front">🧠</div>
          <div className="card-back">{card}</div>
        </div>
      ))}
    </div>
  );
}

export default Board;
