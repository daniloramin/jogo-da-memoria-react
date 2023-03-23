import React, { useEffect, useState } from "react";
import "./style.scss";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitcher(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <button
        onClick={() => {
          setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        }}
      >
        {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
