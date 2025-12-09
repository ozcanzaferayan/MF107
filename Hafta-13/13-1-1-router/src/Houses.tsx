import { useEffect, useState } from "react";
import { api } from "./api/api";
import HouseCard from "./HouseCard";

// 1. House tipi yarat ve export et (diğer dosyalarda kullanmak için)
export type House = {
  id: string;
  name: string;
  price: string;
  images: string[];
};

const Houses = () => {
  // 2. usss ile houses arrayini tut
  const [houses, setHouses] = useState<House[]>([]);

  // 3. uffs ile api ile evleri çek
  useEffect(() => {
    api.get("/houses").then((res) => setHouses(res.data));
  }, []);

  // 4. Evleri
  return (
    <div>
      {houses.map((house) => (
        <HouseCard house={house} />
      ))}
    </div>
  );
};

export default Houses;
