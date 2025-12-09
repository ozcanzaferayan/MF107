import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api/api";
import type { Product } from "./Products";

const DeleteProduct = () => {
  // 1. usss product oluştur
  const [product, setProduct] = useState<Product>();
  // 1.1. useParams kullan
  const { id } = useParams();
  // 1.2. useNavigate kullan
  const navigate = useNavigate();

  // 2. uffs product'ı çek
  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, []);

  // 3. handleDelete ile sil ve navigate et
  const handleDelete = () => {
    api.delete(`/products/${id}`).then(() => {
      navigate("/products");
    });
  };

  // 4. Silmek istediğinize emin misiniz ve buton
  return (
    <div>
      <h1>Ürün Silme Ekranı</h1>
      <div>ID: {product?.id}</div>
      <div>Model: {product?.model}</div>
      <div>Brand: {product?.brand}</div>
      <div>Silmek istediğinize emin misiniz?</div>
      <button onClick={() => handleDelete()}>Sil</button>
    </div>
  );
};

export default DeleteProduct;
