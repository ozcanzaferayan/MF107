import { useEffect, useState } from "react";
import { Link } from "react-router";
import { api } from "../api/api";

// 1. Export ederek Product type oluştur
export type Product = {
  id: string;
  model: string;
  brand: string;
  img: string;
};

const Products = () => {
  // 2. usss products listesini tut
  const [products, setProducts] = useState<Product[]>([]);

  // 3. uffs ile axios kullanarak verileri çek
  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  // 4. Add ve Product linklerini listele
  return (
    <div>
      <h1>Ürün listesi</h1>
      <Link to={"/products/add"}>Ürün ekle</Link>
      {products.map(({ id, model, img }) => (
        <Link to={`/products/${id}`} key={id} className="block">
          <div>
            <img src={img} className="w-24 h-24 cover" />
            <div>{model}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
