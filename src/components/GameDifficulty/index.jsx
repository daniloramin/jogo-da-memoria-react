import React, { useEffect, useState } from "react";
import "./style.scss";

function GameDifficulty(props) {
  const [difficulty, setDifficulty] = useState(1);

  useEffect(() => {
    console.log(difficulty);
  }, [difficulty]);

  return (
    <div className="game-difficulty-box">
      <button
        className={difficulty === 1 ? "selected" : ""}
        onClick={() => {
          setDifficulty(1);
        }}
        disabled={difficulty === 1 ? true : false}
      >
        Fácil
      </button>
      <button
        className={difficulty === 2 ? "selected" : ""}
        onClick={() => {
          setDifficulty(2);
        }}
        disabled={difficulty === 2 ? true : false}
      >
        Médio
      </button>
      <button
        className={difficulty === 3 ? "selected" : ""}
        onClick={() => {
          setDifficulty(3);
        }}
        disabled={difficulty === 3 ? true : false}
      >
        Difícil
      </button>
    </div>
  );
}

export default GameDifficulty;
