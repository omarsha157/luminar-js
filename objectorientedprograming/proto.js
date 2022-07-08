let laptopOne = {
    brand: "asus",
    features: ["1tb hdd","8gb ram"],
    price: "50000",
    color: "black",
    getPrice() {
        return this.price;
    }
}

let laptopTwo = {
    brand: "lenovo",
    price: "48000"
}

laptopTwo.__proto__ = laptopOne;

console.log(laptopTwo.color);