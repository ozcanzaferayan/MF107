import { useEffect, useState } from "react";
import { Link } from "react-router";
import { api } from "../api/api";

// 1. Student type oluştur export et
export type Student = {
  id: string;
  name: string;
};

const Students = () => {
  // 2. usss students listesi tanımı
  const [students, setStudents] = useState<Student[]>([]);

  // 3. uffs içinde axios student listesi çekme
  useEffect(() => {
    api.get("/students").then((res) => setStudents(res.data));
  }, []);

  // 4. map: listeleme ve Link ile detaya yönlendirme
  return (
    <div>
      <h1>Oğrenci listesi</h1>
      <Link to={"/students/add"}>Oğrenci Ekle</Link>
      <ul>
        {students.map(({ id, name }) => (
          <Link to={`/students/${id}`}>
            <li key={id}>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Students;
