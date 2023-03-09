import React, { useContext, useEffect } from "react";
import "./style.scss";
import { GameDifficultyContext } from "../../context/GameDifficultyContext";

function GameDifficulty(props) {
  const [difficulty, setDifficulty] = useContext(GameDifficultyContext);

  return (
    <div className="game-difficulty-box">
      <button
        className={difficulty === 1 ? "selected" : ""}
        onClick={() => {
          setDifficulty((prev) => 1);
        }}
        disabled={difficulty === 1 ? true : false}
      >
        Fácil
      </button>
      <button
        className={difficulty === 2 ? "selected" : ""}
        onClick={() => {
          setDifficulty((prev) => 2);
        }}
        disabled={difficulty === 2 ? true : false}
      >
        Médio
      </button>
      <button
        className={difficulty === 3 ? "selected" : ""}
        onClick={() => {
          setDifficulty((prev) => 3);
        }}
        disabled={difficulty === 3 ? true : false}
      >
        Difícil
      </button>
    </div>
  );
}

export default GameDifficulty;
