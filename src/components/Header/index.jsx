import React from "react";
import "./style.scss";
import Title from "../Title";
import GameDifficulty from "../GameDifficulty";
import ThemeSwitcher from "../ThemeSwitcher";

function Header(props) {
  return (
    <header>
      <Title>Jogo da Memória</Title>
      <GameDifficulty />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
