import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px"
      }}
    >
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px"
          }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;