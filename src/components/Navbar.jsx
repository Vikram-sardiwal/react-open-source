import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-dot" />
          React Open Source
        </NavLink>

        <button
          type="button"
          className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <nav className={`navbar-links ${isMenuOpen ? "is-active" : ""}`}>
          <NavLink to="/" end className="navbar-link" onClick={closeMenu}>
            Home
          </NavLink>
          <a
            href="https://github.com/Vikram-sardiwal/react-open-source"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
          <a
            href="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Contributing
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;