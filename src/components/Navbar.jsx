import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar relative z-50">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-dot" />
          React Open Source
        </NavLink>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source/issues"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues
          </a>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contributing
          </a>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile-menu absolute left-0 top-full w-full bg-white z-50 shadow-md pb-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source/issues"
            className="mobile-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Issues
          </a>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md"
            className="mobile-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Contributing
          </a>

          <a
            href="https://github.com/Vikram-sardiwal/react-open-source"
            className="mobile-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;