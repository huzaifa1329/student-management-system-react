import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import "../styles/Students.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Students</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <Loader />
      ) : filteredStudents.length === 0 ? (
        <h2>No student found.</h2>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;