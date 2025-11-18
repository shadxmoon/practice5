let photos = [
    {
        name: "Фотография 1",
        path: "content/1.jpg",
        title: "Описание 1",
        category: "fall"
    },
    {
        name: "Фотография 1",
        path: "content/osen2.jpg",
        title: "Описание 1",
        category: "fall"
    },
    {
        name: "Фотография 1",
        path: "content/osen3.jpg",
        title: "Описание 1",
        category: "fall"
    },
    {
        name: "Фотография 2",
        path: "content/2.jpg",
        title: "Описание 2",
        category: "summer"
    },
    {
        name: "Фотография 2",
        path: "content/leto2.jpg",
        title: "Описание 2",
        category: "summer"
    },
    {
        name: "Фотография 2",
        path: "content/leto3.jpg",
        title: "Описание 2",
        category: "summer"
    },
    {
        name: "Фотография 3",
        path: "content/3.jpg",
        title: "Описание 3",
        category: "spring"
    },
       {
        name: "Фотография 4",
        path: "content/3_1.jpg",
        title: "Описание 4",
        category: "spring"
    },
       {
        name: "Фотография 5",
        path: "content/3_2.jpg",
        title: "Описание 5",
        category: "spring"
    },
       {
        name: "Фотография 6",
        path: "content/3_3.jpg",
        title: "Описание 6",
        category: "spring"
    },
       {
        name: "Фотография 7",
        path: "content/3_4.jpg",
        title: "Описание 7",
        category: "spring"
    },
       {
        name: "Фотография 8",
        path: "content/3_5.jpg",
        title: "Описание 8",
        category: "spring"
    },
    {
        name: "Фотография 7",
        path: "content/4.jpg",
        title: "Описание 7",
        category: "winter"
    },
    {
        name: "Фотография 7",
        path: "content/zima2.jpg",
        title: "Описание 7",
        category: "winter"
    },
    {
        name: "Фотография 7",
        path: "content/zima3.jpg",
        title: "Описание 7",
        category: "winter"
    }
];

let select = document.getElementById('SelectImg');
let row = document.getElementById('row');
let cardimg = document.getElementById('cardimg')

function showPhotos(category) {
    row.innerHTML = "";

    for (let i = 0; i < photos.length; i++) {
        if (category === "all" || photos[i].category === category) {

            let col = document.createElement('div');
            col.classList.add("col");

            let card = cardimg.content.cloneNode(true); 

            card.querySelector('img').src = photos[i].path
            card.querySelector('img').setAttribute('data-img', photos[i].path)
            card.querySelector('img').setAttribute('data-name', photos[i].name)

            card.querySelector('h5').innerHTML = photos[i].name

           /* let item = document.createElement('div');
            item.classList.add("item");

            let img = document.createElement('img');
            img.src = photos[i].path;
            img.alt = photos[i].title;

            item.appendChild(img);*/
            col.appendChild(card)
            /*col.appendChild(item);*/
            row.appendChild(col);
        }
    }
}

showPhotos("all");

select.addEventListener('change', function () {
    showPhotos(select.value);
});
