import React from "react";
import "./style.scss";
import Header from "../Header";
import Board from "../Board";
import Footer from "../Footer";

function MemoryGame(props) {
  return (
    <div className="container">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default MemoryGame;
