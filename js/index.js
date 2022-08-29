function users2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(users){
   for(const user of users)
   console.log(user.name)
}
function displayUsers2(data){
    const ul =document.getElementById('users-list');
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText =user.name;
        ul.appendChild(li);
    }
 }
 function users3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(adom => personalUser(adom));
 }
 function personalUser(adom){
    const ul = document.getElementById('users-list');
    for(const user of adom){
        console.log(user.email)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
    }
 }
 function deleteDpost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
    title: 'foo',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function creatApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}