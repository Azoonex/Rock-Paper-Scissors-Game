const demo = document.getElementById('demo')!;

window.onload = function () {
    for (let i = 1;
        i < 4; i++) {
        const createIamge = document.createElement('img')!
        createIamge.id = i.toString()
            createIamge.src = `images-${i}.png`

        demo.appendChild(createIamge)
    }
}