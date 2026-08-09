function DarkMode() {

  //const toggle = document.getElementById("toggle");
  const rootEl = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    rootEl.setAttribute("data-theme", savedTheme);
  }

  function printToggle() {

    const currentTheme = rootEl.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    rootEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className="dark-toggle">
      <input type="checkbox" className="toggle-checkbox" id="toggle" name="toggle" onClick={printToggle} />
      <label htmlFor="toggle" className="switch">
        <span className="icon">☀️</span>
        <span className="icon">🌙</span>
        <span className="switcher"></span>
      </label>
    </div>
  )
}

export default DarkMode;
