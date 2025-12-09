import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../api/api";

const AddStudent = () => {
  // 1. usss inputlar için state
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // 2. handleAdd metodu
  const handleAdd = () => {
    api
      .post("/students", {
        name: name,
      })
      .then(() => {
        // Redirect to students
        navigate("/students");
      });
  };

  // 3. inputlar ve ekleme butonu
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleAdd()}>Ekle</button>
    </div>
  );
};

export default AddStudent;
