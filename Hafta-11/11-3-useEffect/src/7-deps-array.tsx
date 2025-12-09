// rafce

import { useEffect, useState } from "react";

// 1. Type oluştur
type Todo = {
  id: number;
  title: string;
};

const App = () => {
  // 2. usss
  const [todo, setTodo] = useState<Todo>();
  const [id, setId] = useState(0);

  // 3. uffs
  useEffect(() => {
    const API_URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((todo) => setTodo(todo));
  }, [id]);

  // 4. listele
  return (
    <div>
      <button onClick={() => setId(id - 1)} className="block">
        Onceki
      </button>
      <button onClick={() => setId(id + 1)} className="block">
        Sonraki
      </button>
      {todo && (
        <span>
          {todo.id} - {todo.title}
        </span>
      )}
    </div>
  );
};

export default App;
