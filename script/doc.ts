const demo = document.getElementById("demo")!;

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

function selectionBot() {
  return Math.floor(Math.random()) * 3 + 1;
}

window.onload = function () {
  const botSelection = selectionBot();

  for (let i = ; i < 6; i++) {
    const createIamge = document.createElement("img")!;
    createIamge.id = i.toString();
    createIamge.src = `images-${i}.png`;
    demo.appendChild(createIamge);
    let selected = pattern[i].id;

    console.log(i)
  }
}

