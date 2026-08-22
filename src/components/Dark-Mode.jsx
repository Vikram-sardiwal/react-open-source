import { useState, useEffect } from "react";

function DarkMode() {
  // Initialise from localStorage → OS preference → light
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Keep html[data-theme] and localStorage in sync whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Theme selection">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle"
        name="toggle"
        checked={isDark}
        onChange={handleToggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />

      <label htmlFor="toggle" className="switch">
        <span className="icon" aria-hidden="true">☀</span>
        <span className="icon" aria-hidden="true">🌙</span>
        <span className="switcher" aria-hidden="true"></span>
      </label>
    </div>
  );
}

export default DarkMode;