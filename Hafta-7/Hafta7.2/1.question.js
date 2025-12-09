import axios from "axios";
import readline from "readline";

const API_URL = "https://swapi.dev/api/people/";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sor() {
  rl.question("Karakter id: ", async (answer) => {
    if (answer === "exit") {
      rl.close();
      return;
    }
    const id = parseInt(answer);
    const res = await axios.get(API_URL + id);
    const name = res.data.name;
    console.log("Karakter", name);
    sor();
  });
}

sor();
