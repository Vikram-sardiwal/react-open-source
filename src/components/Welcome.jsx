import Card from "./Card.jsx";

function Welcome() {
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

      <div className="cards-grid">
        <Card
          title="React Components"
          description="Build reusable, modular UI components to strengthen your React skills."
          actionText="Explore Repository"
          actionLink="https://github.com/Vikram-sardiwal/react-open-source"
        />
        <Card
          title="Contribute"
          description="Learn how to create pull requests, follow guidelines, and collaborate."
          actionText="Read Guidelines"
          actionLink="https://github.com/Vikram-sardiwal/react-open-source/blob/main/CONTRIBUTING.md"
        />
      </div>

      <p>
        Please check <code>CONTRIBUTING.md</code> for contribution
        guidelines and instructions.
      </p>

      <p>
        <strong>Created and maintained by Vikram Sardiwal.</strong>
      </p>
    </section>
  );
}

export default Welcome;