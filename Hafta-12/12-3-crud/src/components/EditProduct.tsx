import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api/api";
import type { Product } from "./Products";

const EditProduct = () => {
  // 1. usss product
  const [product, setProduct] = useState<Product>();
  // 1.1. useParams id al
  const { id } = useParams();
  // 1.2. useNavigate ile ürün detaya dön
  const navigate = useNavigate();
  // 2. uffs ile ürünü çek
  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, []);

  // 3. handleEdit ile axios ile PUT gönder ve ürün detayına dön
  const handleEdit = () => {
    api.put(`/products/${id}`, product).then(() => {
      navigate(`/products/${id}`);
    });
  };

  if (!product) return "Yükleniyor";

  // 4. inputları oluştur ve butona handleEdit bağla
  return (
    <div>
      <h1>Ürün Güncelleme</h1>
      <input
        value={product?.model}
        onChange={(e) => setProduct({ ...product, model: e.target.value })}
        placeholder="Model"
      />
      <input
        value={product?.brand}
        onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        placeholder="Brand"
      />
      <button onClick={() => handleEdit()}>Kaydet</button>
    </div>
  );
};

export default EditProduct;
