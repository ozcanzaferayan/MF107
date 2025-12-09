// rafce

import { useEffect, useState } from "react";

// 1. Type oluştur
type Movie = {
  id: string;
  name: string;
};

const App = () => {
  // 2. usss
  const [movies, setMovies] = useState<Movie[]>([]);
  const [name, setName] = useState("");

  // 3. uffs
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const API_URL = "http://localhost:5174/movies";
    fetch(API_URL)
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  };

  const handleAdd = () => {
    const API_URL = "http://localhost:5174/movies";
    const found = movies.filter((m) => m.name === name);

    if (found.length > 0) {
      alert("Film zaten var");
      return;
    }
    // Ekleme yap
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    }).then(() => {
      // Listeyi tekrar çek
      getMovies();
      setName("");
    });
  };

  const handleDelete = (id: string) => {
    const API_URL = "http://localhost:5174/movies";
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      // Listeyi tekrar çek
      getMovies();
    });
  };

  // 4. map
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleAdd()}>Ekle</button>
      {movies.map((movie) => (
        <div>
          <span>{movie.name}</span>
          <button onClick={() => handleDelete(movie.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default App;
