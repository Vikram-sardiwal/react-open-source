function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>React Open Source Starter</h3>

        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="https://github.com/Vikram-sardiwal/react-open-source">
            GitHub
          </a>
          <a href="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md">
            Contributing
          </a>
        </nav>

        <p>© {new Date().getFullYear()} React Open Source Starter</p>
      </div>
    </footer>
  );
}

export default Footer;

