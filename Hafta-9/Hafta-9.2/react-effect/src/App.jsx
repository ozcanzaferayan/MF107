import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

const App = () => {
  const [metin, setMetin] = useState(
    "The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree."
  );
  const [ceviri, setCeviri] = useState("");
  useEffect(() => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const prompt = `Hava şu an 10 C sence ne giymeliyim`;

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    })
      .then((res) => res.json())
      .then((veri) => setCeviri(veri.choices[0].message.content));
  }, []);

  return (
    <div>
      <h1>Metin: {metin}</h1>
      <h1>Cevirisi: {ceviri}</h1>
    </div>
  );
};

export default App;
