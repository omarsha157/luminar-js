let weather=[
    {district:"tvm",temp:25},
    {district:"ekm",temp:25},
    {district:"kty",temp:25},
    {district:"idk",temp:25},
    {district:"tsr",temp:25},
    {district:"pkd",temp:25},
    {district:"tvm",temp:29},
    {district:"ekm",temp:31},
    {district:"kty",temp:23},
    {district:"idk",temp:14},
    {district:"tsr",temp:28},
    {district:"pkd",temp:30},
]

// op=create a new object with districtname : highest temp
// q1 out={"tvm":29,"ekm":31,"kty":25,"idk":25,"tsr":28}

let weatherOut = {};

for (let data of weather) {
    let districtName = data.district;
    let curTemp = data.temp;
    if (districtName in weatherOut) {
        let oldTemp = weatherOut[districtName];
        if (curTemp > oldTemp) {
            weatherOut[districtName] = curTemp;
        }
    } else {
        weatherOut[districtName] = curTemp;
    }
}

// console.log(weatherOut);

// q2 district with highest temp

let weatherArr = Object.entries(weatherOut);

console.log(weatherArr.sort((d1,d2) => d2[1] - d1[1])[0]);