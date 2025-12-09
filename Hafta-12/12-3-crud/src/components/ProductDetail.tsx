import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { api } from "../api/api";
import type { Product } from "./Products";

const ProductDetail = () => {
  // 1. usss product
  const [product, setProduct] = useState<Product>();
  // 1.1 useParams ile id al
  const { id } = useParams();

  // 2. uffs ürün detayı çekicez
  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, []);

  // 3. ürün detayını listeleriz
  // 3.1. Ürün silme düzenleme butonları ekleriz
  return (
    <div>
      <h1>Ürün detayları</h1>
      <div>ID: {product?.id}</div>
      <div>Model: {product?.model}</div>
      <div>Brand: {product?.brand}</div>
      <div className="flex gap-4">
        <Link
          className="bg-red-500 p-4 py-2 rounded text-white"
          to={`/products/${id}/delete`}
        >
          Sil
        </Link>
        <Link
          className="bg-blue-500 p-4 py-2 rounded text-white"
          to={`/products/${id}/edit`}
        >
          Düzenle
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
