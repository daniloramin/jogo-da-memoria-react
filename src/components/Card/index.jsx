import React from "react";
import "./style.scss";

function Card({ card, onChooseCard }) {
  return (
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
  );
}

export default Card;
