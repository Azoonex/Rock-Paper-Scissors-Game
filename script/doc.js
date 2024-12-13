var demo = document.getElementById('demo');
window.onload = function () {
    for (var i = 1; i < 4; i++) {
        var createIamge = document.createElement('img');
        createIamge.id = i.toString();
        createIamge.src = "images-".concat(i, ".png");
        demo.appendChild(createIamge);
    }
};
