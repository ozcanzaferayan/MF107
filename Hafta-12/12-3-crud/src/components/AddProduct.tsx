import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../api/api";

const AddProduct = () => {
  // 1. usss: model, brand
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [img, setImg] = useState("");

  // 1.1. redirect etmek için useNavigate kullan
  const navigate = useNavigate();

  // 2. handleAdd = () ile ekleme yapıcaz
  const handleAdd = () => {
    api
      .post("/products", {
        model,
        brand,
        img,
      })
      .then(() => {
        navigate("/products");
      });
  };

  // 3. inputlar
  return (
    <div>
      <h1>Ürün ekleme</h1>
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
      />
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
      />
      <input
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Image URL"
      />
      <button onClick={() => handleAdd()}>Ekle</button>
    </div>
  );
};

export default AddProduct;
