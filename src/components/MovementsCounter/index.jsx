import React, { useEffect } from "react";
import "./style.scss";

function MovementsCounter({ playing, movements, setMovements, win }) {
  useEffect(() => {
    if (!playing) {
      setMovements(() => 0);
    }
  }, [playing]);

  return (
    <span
      className="movements-counter"
      style={{ color: `${win ? "mediumseagreen" : ""}` }}
    >
      {movements}
    </span>
  );
}

export default MovementsCounter;
