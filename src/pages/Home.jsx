import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
      <h1>Student Management System</h1>

      <p>
        Manage and explore student information using React, Routing, and API
        Integration.
      </p>

      <Link to="/students">
        <button>View Students</button>
      </Link>
    </section>
  );
}

export default Home;