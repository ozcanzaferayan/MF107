// rafce

import { useEffect, useState } from "react";

type Movie = {
  id: number;
  name: string;
};

const App = () => {
  // usss
  const [movies, setMovies] = useState<Movie[]>([]);

  // uffs
  useEffect(() => {
    // TODO: Web isteği
    const response = [
      {
        id: 1,
        name: "Godfather",
      },
    ];
    setMovies(response);
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default App;
