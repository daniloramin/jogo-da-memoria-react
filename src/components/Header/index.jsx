import React from "react";
import "./style.scss";
import Title from "../Title";

function Header(props) {
  return (
    <header>
      <Title>Jogo da Memória</Title>
      <div>Game Difficulty</div>
      <div>Theme Switcher</div>
    </header>
  );
}

export default Header;
