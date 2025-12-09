import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/products/:id/delete" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
