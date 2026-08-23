import { useCallback, useEffect, useState } from "react";
import Loading from "./Loading.jsx";

const COMMUNITY_API_URL = "https://jsonplaceholder.typicode.com/users/1";

function Welcome() {
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadCommunityMember = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    setMember(null);

    try {
      const response = await fetch(COMMUNITY_API_URL);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setMember(data);
    } catch (error) {
      console.error("Community highlight request failed:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCommunityMember();
  }, [loadCommunityMember]);

  return (
    <section className="welcome">
      <h1>Welcome to React Open Source Starter</h1>

      <p>
        This project is specially created to help new contributors make
        their first open source contribution.
      </p>

      <p>
        You can create a new component, add a feature, fix a bug, improve
        the UI, or make any other useful improvement — then submit a
        Pull Request.
      </p>

      <p>
        Please check <code>CONTRIBUTING.md</code> for contribution
        guidelines and instructions.
      </p>

      <p>
        <strong>Created and maintained by Vikram Sardiwal.</strong>
      </p>

      {isLoading && <Loading />}

      {hasError && !isLoading && (
        <div className="api-error" role="alert">
          <h2>Unable to load the content</h2>
          <p>
            The request could not be completed. Please try again.
          </p>
          <button
            type="button"
            className="retry-button"
            onClick={loadCommunityMember}
          >
            Try Again
          </button>
        </div>
      )}

      {member && !isLoading && !hasError && (
        <div className="community-highlight">
          <h2>Community highlight</h2>
          <p>
            Meet <strong>{member.name}</strong>
            {member.company?.name ? ` from ${member.company.name}` : ""}.
          </p>
        </div>
      )}
    </section>
  );
}

export default Welcome;
