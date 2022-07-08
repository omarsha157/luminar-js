let shoes = [
    {
        brand: "Adidas",
        model: "Mens Response Super 2.0",
        price: 8127,
        image: "https://m.media-amazon.com/images/I/61zkH0+ANvL._UY695_.jpg"
    },
    {
        brand: "Nivia",
        model: "Court 2.0 Badminton Shoe",
        price: 1331,
        image: "https://m.media-amazon.com/images/I/71mbgpLLITL._SX679_.jpg"
    },
    {
        brand: "Crocs",
        model: "Womens 205234",
        price: 3496,
        image: "https://m.media-amazon.com/images/I/51WLyTcZAAS._UL1500_.jpg"
    },
    {
        brand: "Fila",
        model: "Men's Dominic Ii Running Shoe",
        price: 1259,
        image: "https://m.media-amazon.com/images/I/81kBHJ9bJwL._UX695_.jpg"
    },
    {
        brand: "Adidas",
        model: "Unisex Edge.3 Ll Fg Shoes Football",
        price: 6999,
        image: "https://m.media-amazon.com/images/I/71mmAeZzeNL._UL1500_.jpg"
    },
    {
        brand: "Nivia",
        model: "Ashtang Football Turf Shoes for Mens",
        price: 1799,
        image: "https://m.media-amazon.com/images/I/71k-Ud45FYL._UY695_.jpg"
    },
    {
        brand: "Nike",
        model: "Men's Air Zoom Vomero 16 Running Shoe",
        price: 26721,
        image: "https://m.media-amazon.com/images/I/51cdfIUdFeL._UY695_.jpg"
    },
    {
        brand: "Fila",
        model: "Men's Wankelio Running Shoe",
        price: 3149,
        image: "https://m.media-amazon.com/images/I/81uaBs3YJCL._UX695_.jpg"
    },
    {
        brand: "Puma",
        model: "Unisex-Adult Graviton Shoes",
        price: 2943,
        image: "https://m.media-amazon.com/images/I/71Xz5k-s5SL._UX695_.jpg"
    },
    {
        brand: "Woodland",
        model: "mens Sgc 3279919 Running Shoe",
        price: 2796,
        image: "https://m.media-amazon.com/images/I/81VHIVoLlOL._UX695_.jpg"
    }
];

const selectbox = document.querySelector('#id_select');

shoes.forEach(shoe => {
    let option = document.createElement("option");
    option.text = shoe.model;
    option.value = shoe.model;
    selectbox.appendChild(option);
});

let htmlData = ``;

shoes.forEach(shoe => {
    htmlData += `
        <div class="col-lg-4 my-3">
            <div class="card" style="width: 98%;">
                <img src="${shoe.image}" class="card-img-top" style="height: 18rem;object-fit: contain;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${shoe.brand}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li id="id_model" class="list-group-item">${shoe.model}</li>
                    <li class="list-group-item">&#8377;${shoe.price}/-</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Buy now</a>
                    <button onclick="getProduct(event)" value="${shoe.model}">view</button>
                    <a href="javascript:displaySelectedLink();" id="id_link" class="card-link">view</a>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('#id_out').innerHTML = htmlData;

function displaySelectedLink() {
    let shoeModel = document.querySelector('#id_model').textContent;

    let shoe = shoes.find(shoe => shoe.model == shoeModel);

    populateValue(shoe);
}

function getProduct(event) {

    let shoeModel = event.target.value;

    let shoe = shoes.find(shoe => shoe.model == shoeModel);

    populateValue(shoe);
    
}

function displaySelected() {
    let shoeModel = selectbox.value;

    let shoe = shoes.find(shoe => shoe.model == shoeModel);

    populateValue(shoe);
}

function populateValue(shoe) {
    let htmlData = `
    <div class="col-4"></div>
    <div class="card col-4" >
        <img src="${shoe.image}" class="card-img-top" style="height: 18rem;object-fit: contain;" alt="...">
        <div class="card-body">
            <h5 class="card-title">${shoe.brand}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${shoe.model}</li>
            <li class="list-group-item">&#8377;${shoe.price}/-</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Buy now</a>
        </div>
    </div>
    <div class="col-4"></div>
    `;

    document.querySelector('#id_out').innerHTML = htmlData;
};

