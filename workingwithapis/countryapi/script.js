

function displayCountry() {
    let countryName = document.querySelector('#id_country').value;
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => displayHtml(data));
}

function displayHtml(data) {
    let htmlData = `
                    <div class="card" style="width: 100%;">
                        <img src="${data[0].flags.svg}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[0].name}</h5>
                            <p class="card-text">The capital of ${data[0].name} is ${data[0].capital}, The counrty has a population of ${data[0].population}. ${data[0].currencies[0].name} is the currency and ${data[0].languages[0].name} is the primary language.</p>
                            <a href="#" class="btn btn-primary">view more</a>
                        </div>
                    </div>
                    `;
    document.querySelector('#id_output').innerHTML = htmlData;
}

fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => populateData(data))

function populateData(countries) {
    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = country.name;
        option.text = country.name;
        document.querySelector('#selectbox').appendChild(option);
    })
}

function selectDisplayCountry() {
    let countryName = document.querySelector('#selectbox').value;

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => displayHtml(data));
}


// ?country name
// ?population
// ? capital
// ? flag
// ? currency name
// ? language