import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import AddStudent from "./screens/AddStudent";
import DeleteStudent from "./screens/DeleteStudent";
import EditStudent from "./screens/EditStudent";
import Home from "./screens/Home";
import StudentDetail from "./screens/StudentDetail";
import Students from "./screens/Students";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/:id/delete" element={<DeleteStudent />} />
        <Route path="/students/:id/edit" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
