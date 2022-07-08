
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayValues(data));

function displayValues(todos) {
    let htmlData = ``;

    todos.forEach(todo => {
        htmlData += `
                <tr>
                    <td>${todo.userId}</td>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                    
                </tr>
            `
    });

    document.querySelector('#result').innerHTML = htmlData;
};

