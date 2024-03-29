function getWeather() {
    let cityName = document.querySelector('#id_select').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
        .then(res => res.json())
        .then(data => populateData(data));
};

function populateData(data) {
    let htmlData = `
            <h1 class="display-1">${data.name}</h1>
            <h3>${data.weather[0].description} ${data.main.temp}&#8451;</h3>
            <p> pressure is ${data.main.pressure} hPa, humidity of ${data.main.humidity} g/Kg and a wind speed of ${data.wind.speed} kmph</p>
    `;

    id_result.innerHTML = htmlData;
}
