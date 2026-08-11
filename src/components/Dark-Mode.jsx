function DarkMode() {
  const rootEl = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    rootEl.setAttribute("data-theme", savedTheme);
  }

  function printToggle() {
    const currentTheme =
      rootEl.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    rootEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const currentTheme =
    rootEl.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const isDark = currentTheme === "dark";

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
        onChange={printToggle}
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