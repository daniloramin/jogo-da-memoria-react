import React, { useState } from "react";
import "./style.scss";

function ThemeSwitcher(props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="theme-switcher">
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      >
        {darkMode ? "🌙" : "💡"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
