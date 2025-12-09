// rafce

import { useEffect, useState } from "react";

// 1. Aşama: type oluştur
type Todo = {
  id: number;
  title: string;
};

const App = () => {
  // 2. Aşama: usss oluştur
  const [todos, setTodos] = useState<Todo[]>([]);

  // 3. Aşama: uffs oluştur
  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/todos";

    fetch(API_URL)
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);

  // 4. Aşama verileri bas
  return (
    <div>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </div>
  );
};

export default App;
