import { easy, medium, hard } from "./cards";

export default function (difficulty) {
  let cards = [];

  if (difficulty === 1) cards = [...easy, ...easy];
  if (difficulty === 2) cards = [...medium, ...medium];
  if (difficulty === 3) cards = [...hard, ...hard];

  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
