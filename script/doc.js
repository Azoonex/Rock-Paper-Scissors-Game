var demo = document.getElementById("demo");
var btnStart = document.getElementById("btn-start");
var winderGame = document.getElementsByTagName("h2")[0];
var winer = null;
// img = > 1 paper / sclassors / rock
var pattern = [
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
    var _loop_1 = function (i) {
        var createIamge = document.createElement("img");
        createIamge.src = "images-".concat(i + 1, ".png");
        demo.appendChild(createIamge);
        createIamge.addEventListener("click", function () {
            return handleSetGameWiner(pattern[i].id, randomValue());
        });
    };
    for (var i = 0; i < 3; i++) {
        _loop_1(i);
    }
}
function handleSetGameWiner(pattern, randomNumber) {
    if (pattern !== randomNumber) {
        console.log("user" + pattern, "bot" + randomNumber);
        console.log(winer);
        return;
    }
    if (typeof winer !== null) {
        switch (pattern) {
            case 1:
                if (randomNumber === 3) {
                    winer = "user";
                }
                else {
                    winer = "bot";
                }
                break;
            case 2:
                if (randomNumber === 1) {
                    winer = "user";
                }
                else {
                    winer = "bot";
                }
                break;
            case 3:
                if (randomNumber === 3) {
                    winer = "user";
                }
                else {
                    winer = "bot";
                }
        }
    }
    winderGame.innerHTML = winer ? "winer" + winer : "winder  ";
}
