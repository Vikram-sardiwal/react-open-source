import { NavLink } from "react-router-dom";
import DarkMode from "./Dark-Mode.jsx";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-dot" />
          React Open Source
        </NavLink>

        <div className="navbar-actions">
          <nav className="navbar-links">
            <NavLink to="/" end className="navbar-link">
              Home
            </NavLink>
            <a
              href="https://github.com/Vikram-sardiwal/react-open-source"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributing
            </a>
          </nav>
          <DarkMode />
        </div>
      </div>
    </header>
  );
}

export default Navbar;