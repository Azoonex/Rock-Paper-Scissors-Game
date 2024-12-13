var demo = document.getElementById("demo");
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
function selectionBot() {
    return Math.floor(Math.random()) * 3 + 1;
}
window.onload = function () {
    var botSelection = selectionBot();
    for (var i = ; i < 6; i++) {
        var createIamge = document.createElement("img");
        createIamge.id = i.toString();
        createIamge.src = "images-".concat(i, ".png");
        demo.appendChild(createIamge);
        var selected = pattern[i].id;
        console.log(i);
    }
};
