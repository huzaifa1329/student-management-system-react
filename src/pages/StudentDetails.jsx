import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/Details.css";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="details">
      <h1>Student Details</h1>

      <div className="details-card">
        <h2>{student.name}</h2>

        <p>
          <strong>Username:</strong> {student.username}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Website:</strong> {student.website}
        </p>

        <p>
          <strong>City:</strong> {student.address.city}
        </p>

        <p>
          <strong>Street:</strong> {student.address.street}
        </p>

        <p>
          <strong>Company:</strong> {student.company.name}
        </p>

        <Link to="/students">
          <button>← Back to Students</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;