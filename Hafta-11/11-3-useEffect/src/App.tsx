// rafce

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

// 1. type
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const App = () => {
  // 2. usss
  const [product, setProduct] = useState<Product>();
  const [id, setId] = useState(8);

  // 3. uffs
  useEffect(() => {
    const API_URL = `https://fakestoreapi.com/products/${id}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [id]);

  // 4. Listele
  return (
    <div>
      <button className="block" onClick={() => setId(id - 1)}>
        Onceki
      </button>
      <button className="block" onClick={() => setId(id + 1)}>
        Sonraki
      </button>
      {product && <ProductCard product={product} />}
    </div>
  );
};

export default App;
