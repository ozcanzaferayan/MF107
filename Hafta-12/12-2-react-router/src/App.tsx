// rafce

import defaultAxios from "axios";
import { useEffect, useState } from "react";

// 0. axios instance oluştur
const axios = defaultAxios.create({
  baseURL: "http://localhost:5174",
});

// 1. type oluştur
type Student = {
  id: string;
  name: string;
};

const App = () => {
  // 2. usss
  // 2.1. liste tanımı
  const [students, setStudents] = useState<Student[]>([]);
  // 2.2. name, surname tanımları
  const [name, setName] = useState("");

  // 3. getStudents() tanımı
  const getStudents = () => {
    axios.get("/students").then((res) => setStudents(res.data));
  };
  // 3.1. uffs içinde getStudents kullanımı
  useEffect(() => {
    getStudents();
  }, []);

  // 4. handleAdd tanımı
  const handleAdd = () => {
    axios
      .post("/students", {
        name: name,
      })
      .then(() => {
        getStudents();
        setName("");
      });
  };

  // 5. handleDelete tanımı
  const handleDelete = (id: string) => {
    axios.delete(`/students/${id}`).then(() => {
      getStudents();
    });
  };

  // 6. map: input ve buttonların tanımları
  // 6. map: input ve buttonların tanımları
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleAdd()}>Ekle</button>
      {students.map(({ id, name }) => (
        <div key={id}>
          <span>{name}</span>
          <button onClick={() => handleDelete(id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default App;
