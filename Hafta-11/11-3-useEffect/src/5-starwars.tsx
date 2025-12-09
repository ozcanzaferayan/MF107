// rafce

import { useEffect, useState } from "react";

// 1. Type oluştur
type Person = {
  name: string;
  mass: string;
  height: string;
};

const App = () => {
  // 2. usss oluştur
  const [people, setPeople] = useState<Person[]>([]);

  // 3. uffs oluştur
  useEffect(() => {
    const API_URL = "https://swapi.info/api/people";
    fetch(API_URL)
      .then((res) => res.json())
      .then((people) => setPeople(people));
  }, []);

  // 4. Listele
  return (
    <div>
      {people.map((person) => (
        <li>
          {person.name} {person.mass} {person.height}
        </li>
      ))}
    </div>
  );
};

export default App;
