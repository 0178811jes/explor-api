function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(Data => console.log(Data));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(Data => displayUsers(Data));
}

function displayUsers(Data){
    console.log(Data);
}

