import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Theme selection"
    >
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle"
        name="toggle"
        checked={isDark}
        onChange={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />

      <label htmlFor="toggle" className="switch">
        <span className="icon" aria-hidden="true">
          ☀
        </span>
        <span className="icon" aria-hidden="true">
          🌙
        </span>
        <span className="switcher" aria-hidden="true"></span>
      </label>
    </div>
  );
}

export default DarkMode;