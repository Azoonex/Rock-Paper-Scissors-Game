const demo = document.getElementById("demo")!;
const btnStart = document.getElementById("btn-start")!;
const winderGame = document.getElementsByTagName("h2")[0]!;

let winer: "user" | "bot" | null = null;
// img = > 1 paper / sclassors / rock

let pattern = [
  {
    id: 1,
    value: "paper",
  },
  {
    id: 2,
    value: "rock",
  },
  {
    id: 3,
    value: "sclssores",
  },
];

function randomValue() {
  return Math.floor(Math.random()) * 3 + 1;
}

window.addEventListener("load", startGame);

function startGame() {
  // if (winer) {
  //   return;
  // }

  for (let i = 0; i < 3; i++) {
    const createIamge = document.createElement("img")!;
    createIamge.src = `images-${i + 1}.png`;
    demo.appendChild(createIamge);

    createIamge.addEventListener("click", () =>
      handleSetGameWiner(pattern[i].id, randomValue())
    );
  }
}

function handleSetGameWiner(pattern: number, randomNumber: number) {

  if (pattern !== randomNumber) {
    console.log("user" + pattern,"bot" + randomNumber);
    console.log(winer);
    return;
  }
  if (typeof winer !== null) {
    switch (pattern) {
      case 1:
        if (randomNumber === 3) {
          winer = "user";
        } else {
          winer = "bot";
        }
        break
      case 2:
        if (randomNumber === 1) {
          winer = "user";
        } else {
          winer = "bot";
        }
        break
      case 3:
        if (randomNumber === 3) {
          winer = "user";
        } else {
          winer = "bot";
        }
    }
  }
  winderGame.innerHTML = winer ? "winer" + winer : "winder  " 
}


