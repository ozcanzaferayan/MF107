import fs from "node:fs/promises";

const data = await fs.readFile("package.json", { encoding: "utf8" });
console.log(data);
