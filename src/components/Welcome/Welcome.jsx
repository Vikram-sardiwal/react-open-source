import './Welcome.css'
import openSource from '../../assets/openSource.png';



function Welcome() {
  return (
  <section className="welcome">
    <p className='welcome-badge'><img src={openSource}/>Open Source Project - Made for Beginners</p>
    <h1>Welcome to <span className='welcome-title'>React Open Source Starter</span></h1>

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
  </section>
);
}

export default Welcome;