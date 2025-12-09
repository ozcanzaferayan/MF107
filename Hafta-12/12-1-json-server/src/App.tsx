// rafce

import { useEffect, useState } from "react";

// 1. type oluştur
type Student = {
  id: string;
  name: string;
  surname: string;
};

const App = () => {
  // 2. usss
  // 2.1. liste tanımı
  const [students, setStudents] = useState<Student[]>([]);
  // 2.2. inputlar için name, surname tanımları
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // 3. getStudents() tanımı: fetch kullanıcaz
  const getStudents = () => {
    const API_URL = "http://localhost:5174/students";
    fetch(API_URL)
      .then((res) => res.json())
      .then((students) => setStudents(students));
  };
  // 3.1. uffs içinde getStudents kullanımı
  useEffect(() => {
    getStudents();
  }, []);

  // 4. handleAdd tanımı
  const handleAdd = () => {
    const API_URL = "http://localhost:5174/students";
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
      }),
    }).then(() => {
      getStudents();
      setName("");
      setSurname("");
    });
  };

  // 5. handleDelete tanımı
  const handleDelete = (id: string) => {
    const API_URL = "http://localhost:5174/students";

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      getStudents();
    });
  };

  // 6. map: input ve buttonların tanımları
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      <button onClick={() => handleAdd()}>Ekle</button>
      {students.map(({ id, name, surname }) => (
        <div>
          <span>
            {name} {surname}
          </span>
          <button onClick={() => handleDelete(id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default App;
