
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayValues(data));

function displayValues(users) {
let htmlData = ``;

users.forEach(user => {
    htmlData += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                <td><button onclick="displayUser(event)" value="${user.id}" class="btn btn-outline-success">view</button></td>
            </tr>
        `
});

document.querySelector('#result').innerHTML = htmlData;
};

function displayUser(event) {
    fetch(`https://jsonplaceholder.typicode.com/users/${event.target.value}`)
        .then(res => res.json())
        .then(data => displayData(data)); 
};

function displayData(userData) {
        let htmlData = `
                        <div class="card" style="width: 18rem;">
                            <img src="./profile.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${userData.name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">email:${userData.email}</li>
                                <li class="list-group-item">${userData.company.name}</li>
                                <li class="list-group-item">${userData.username}</li>
                                <li class="list-group-item">${userData.address.street},${userData.address.suite},${userData.address.city},${userData.address.zipcode}</li>
                                <li class="list-group-item">${userData.phone}</li>
                                <li class="list-group-item">${userData.website}</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        `;

        document.querySelector('#view_out').innerHTML = htmlData;
        };


// function displayData(userData) {
//         let htmlData = `
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                     <th>Name</th>
//                                     <th>email</th>
//                                     <th>Company</th>
//                                     <th>username</th>
//                                     <th>address</th>
//                                     <th>phone</th>
//                                     <th>website</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>${userData.name}</td>
//                                     <td>${userData.email}</td>
//                                     <td>${userData.company.name}</td>
//                                     <td>${userData.username}</td>
//                                     <td>${userData.address.street},${userData.address.suite},${userData.address.city},${userData.address.zipcode}</td>
//                                     <td>${userData.phone}</td>
//                                     <td>${userData.website}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         `;

//         document.querySelector('.newdata').innerHTML = htmlData;
//         };


