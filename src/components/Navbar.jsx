import { NavLink } from "react-router-dom";
import reactLogo from '../assets/physics.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand">
          <img src={reactLogo}/>
          React Open Source
        </NavLink>

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
      </div>
    </header>
  );
}

export default Navbar;