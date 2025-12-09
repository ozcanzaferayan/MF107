import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AddHouse from "./AddHouse";
import DeleteHouse from "./DeleteHouse";
import EditHouse from "./EditHouse";
import Home from "./Home";
import HouseDetail from "./HouseDetail";
import Houses from "./Houses";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id" element={<HouseDetail />} />
        <Route path="/houses/add" element={<AddHouse />} />
        <Route path="/houses/:id/delete" element={<DeleteHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
