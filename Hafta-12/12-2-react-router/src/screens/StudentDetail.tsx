import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { api } from "../api/api";
import type { Student } from "./Students";

const StudentDetail = () => {
  // 1. usss student oluştur
  const [student, setStudent] = useState<Student>();

  // 1.1. params ile id al
  const { id } = useParams();

  // 2. uffs api ile student çek
  useEffect(() => {
    api.get(`/students/${id}`).then((res) => setStudent(res.data));
  }, []);

  // 3. Görüntüle
  return (
    <div>
      <Link to={`/students/:id/delete`}>Sil</Link>
      <Link to={`/students/:id/edit`}>Düzenle</Link>
      <div> ID: {student?.id}</div>
      <div> Name: {student?.name}</div>
    </div>
  );
};

export default StudentDetail;
