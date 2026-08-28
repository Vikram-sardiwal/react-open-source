import { NavLink } from "react-router-dom";
import { useWishlist } from "../context/useWishlist.js";

function Navbar() {
  const { wishlist } = useWishlist();

  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-dot" />
          React Open Source
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/products" className="navbar-link">
            Products
          </NavLink>
          <NavLink to="/wishlist" className="navbar-link wishlist-nav-link">
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="wishlist-badge" aria-label={`${wishlist.length} items in wishlist`}>
                {wishlist.length}
              </span>
            )}
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