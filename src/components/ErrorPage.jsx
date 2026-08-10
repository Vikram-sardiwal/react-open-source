import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>

      <Link to="/" className="home-button">
        ← Go Home
      </Link>
    </main>
  );
};

export default ErrorPage;