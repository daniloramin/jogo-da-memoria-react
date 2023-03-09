import { createContext, useState } from "react";

export const GameDifficultyContext = createContext();

export function GameDifficultyProvider(props) {
  const [difficulty, setDifficulty] = useState(1);

  return (
    <GameDifficultyContext.Provider value={[difficulty, setDifficulty]}>
      {props.children}
    </GameDifficultyContext.Provider>
  );
}
