import { Link } from "react-router-dom";
import "../styles/StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Phone:</strong> {student.phone}
      </p>

      <p>
        <strong>City:</strong> {student.address.city}
      </p>

      <p>
        <strong>Company:</strong> {student.company.name}
      </p>

      <Link to={`/student/${student.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default StudentCard;