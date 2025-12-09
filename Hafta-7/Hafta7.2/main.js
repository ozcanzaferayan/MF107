import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todoList = [];
const fileName = "todoList.json";

async function sor() {
  // Dosya var mı kontrol et
  if (!existsSync(fileName)) {
    // Dosya yoksa boş array olarak oluştur
    await fs.writeFile(fileName, JSON.stringify([]));
  }
  // Dosya varsa oku ve parse edip todoList array'ine aktar
  todoList = JSON.parse(await fs.readFile(fileName, { encoding: "utf8" }));
  console.log("\n===== TODO Listesi ====");
  todoList.forEach((todo) => {
    console.log(`* ${todo.id}: ${todo.todo}`);
  });
  rl.question("Ne yapayım: ", async (answer) => {
    if (answer === "exit") {
      rl.close();
      return;
    }
    // Silme komutu
    if (answer.startsWith("delete ")) {
      // "delete 3"
      const deleteId = parseInt(answer.split(" ")[1]);
      todoList = todoList.filter((todo) => todo.id !== deleteId);
      await fs.writeFile(fileName, JSON.stringify(todoList));
      sor();
      return;
    } // Edit komutu
    if (answer.startsWith("edit ")) {
      const parts = answer.split(" ");
      const command = parts[0];
      const editId = parseInt(parts[1]);
      const todoName = parts.splice(2, parts.length).join(" ");
      todoList.forEach((todo, index) => {
        if (todo.id === editId) {
          todoList[index].todo = todoName;
        }
      });
      await fs.writeFile(fileName, JSON.stringify(todoList));
      sor();
      return;
    }
    // Yeni todo oluşturulur
    const newTodo = {
      id: todoList.length + 1,
      todo: answer,
    };
    // Todo listesine eklenir
    todoList.push(newTodo);
    // Todo list'i string'e çevirip dosyaya yaz
    await fs.writeFile(fileName, JSON.stringify(todoList));
    sor();
  });
}

sor();
