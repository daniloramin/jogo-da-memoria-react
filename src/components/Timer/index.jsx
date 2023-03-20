import React, { useEffect, useState } from "react";
import "./style.scss";

function Timer({ playing, win }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    if (win) {
      clearInterval(interval);
    } else {
      setSeconds(() => 0);
      setMinutes(() => 0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [playing, win]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(() => 0);
      setMinutes((prev) => prev + 1);
    }
  }, [seconds]);

  return (
    <span
      style={{ color: `${win ? "mediumseagreen" : ""}` }}
      className="timer"
    >{`${minutes < 10 ? "0" + minutes : minutes} : ${
      seconds < 10 ? "0" + seconds : seconds
    }`}</span>
  );
}

export default Timer;
