import { useState } from "react";

const App = () => {
  // usss
  const [diller, setDiller] = useState([
    {
      code: "JP",
      emojiBackground: "bg-red-200",
      title: "Learn Japanese",
      subtitle: "Lesson 1 - Simple Introduction",
    },
    {
      code: "GB",
      emojiBackground: "bg-blue-200",
      title: "Learn English",
      subtitle: "Lesson 2 - Basic Phrases",
    },
    {
      code: "ID",
      emojiBackground: "bg-orange-200",
      title: "Learn Indonesian",
      subtitle: "Lesson 3 - Greet People",
    },
  ]);
  return (
    <div className="grid gap-4 m-4">
      {diller.map((dil) => (
        <div className="bg-slate-100 p-4 rounded flex gap-4">
          <span
            className={
              "grid place-items-center w-14 h-12 rounded text-2xl " +
              dil.emojiBackground
            }
          >
            <img
              className="w-8 h-8"
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${dil.code}.svg`}
            />
          </span>
          <div className="grid">
            <span className="text-xl font-semibold text-slate-800">
              {dil.title}
            </span>
            <span className="text-base font-base text-slate-500">
              {dil.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
