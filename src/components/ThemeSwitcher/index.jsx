import React, { useState } from "react";
import "./style.scss";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitcher(props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="theme-switcher">
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      >
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
