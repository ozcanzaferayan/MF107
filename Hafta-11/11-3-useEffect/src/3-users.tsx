// rafce

import { useEffect, useState } from "react";

// 1. aşama: Type oluştur
type User = {
  id: number;
  name: string;
};

const App = () => {
  // 2. aşama: state oluştur
  // usss
  const [users, setUsers] = useState<User[]>([]);

  // 3. aşama: useEffect kullan
  // uffs
  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  // 4. aşama: ekrana bas
  return (
    <div>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
};

export default App;
