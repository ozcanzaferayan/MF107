import fs from "node:fs/promises";

const user = {
  name: "Zafer",
  age: 33,
};
const data = await fs.writeFile("data.json", JSON.stringify(user));
console.log(data);
