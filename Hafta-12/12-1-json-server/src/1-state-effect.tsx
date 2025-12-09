// rafce

import { useEffect, useState } from "react";

const App = () => {
  // usss
  const [movies, setMovies] = useState([]);

  // uffs
  useEffect(() => {
    // 3 sn sonra filmleri set et
    setTimeout(() => {
      setMovies(["Matrix", "LOTR", "Godfather"]);
    }, 3000);
  }, []);

  // Yükleniyor arayüzü için
  // Film yoksa Yükleniyor göster
  if (movies.length === 0) {
    return (
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Rwa204cHVkMHBldzFvcnhtODJkdzIxaDllaWg1OXc5YnZuN2RoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uEb7Wps1mWe5ffEkQv/giphy.gif" />
    );
  }
  // Film varsa map ile listele
  return movies.map((movie) => <li>{movie}</li>);
};

export default App;
