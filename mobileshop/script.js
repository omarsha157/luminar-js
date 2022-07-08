let mobiles = [
    {
        name: "a52s5g",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "oppo35",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "realmegt",
        brand: "rekme",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "vivo",
        brand: "relme",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "iq7",
        brand: "iq",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "samsungf32",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "samsunfe",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "mi11i",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "mi10pro",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    },
    {
        name: "mi10promax",
        brand: "samsung",
        nw: "5g",
        price: 37000,
        image: "https://m.media-amazon.com/images/I/81-nNnxa6VS._SX679_.jpg",
    }
];


let selectBox = document.querySelector('#id_select');

mobiles.forEach(mob => {
    let option = document.createElement("option");
    option.text = mob.name;
    option.value = mob.name;
    selectBox.appendChild(option);
})

let htmlData = ``;

mobiles.forEach(mob => {
    htmlData += `

    <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${mob.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mob.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">brand: ${mob.brand}</li>
                <li class="list-group-item">network band: ${mob.nw}</li>
                <li class="list-group-item">price: ${mob.price}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>

                <button onclick="viewMob(event)" value="${mob.name}">view</button>

            </div>
        </div>
    </div>

    `
});

document.querySelector('#result').innerHTML = htmlData;

function viewMob(a) {
    let mobileName = a.target.value;
    
    let mobile = mobiles.find(mob => mob.name == mobileName);
    
    populateValue(mobile);

}



function displayMobile() {
    let mobileName = selectBox.value;
    
    let mobile = mobiles.find(mob => mob.name == mobileName);

    populateValue(mobile);
};

function populateValue(mob) {
    let htmlData = `
    <div class="col-4"></div>
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${mob.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mob.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">brand: ${mob.brand}</li>
                <li class="list-group-item">network band: ${mob.nw}</li>
                <li class="list-group-item">price: ${mob.price}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
    <div class="col-4"></div>
    `;

    document.querySelector('#result').innerHTML = htmlData;
};