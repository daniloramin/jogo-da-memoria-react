import React from "react";
import "./style.scss";
import Header from "../Header";
import Board from "../Board";
import Footer from "../Footer";

import { GameDifficultyProvider } from "../../context/GameDifficultyContext";

function MemoryGame(props) {
  return (
    <div className="container">
      <GameDifficultyProvider>
        <Header />
        <Board />
      </GameDifficultyProvider>
      <Footer />
    </div>
  );
}

export default MemoryGame;
