import { useState } from "react";

const App = () => {
  // usss
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Yıldızlararası",
    },
    {
      id: 2,
      name: "Lucy",
    },
    {
      id: 3,
      name: "Interstellar",
    },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <span>{movie.name}</span>
      ))}
    </div>
  );
};

export default App;
