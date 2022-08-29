 function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => desplayTodos(data));
 }
function desplayTodos(todos){
    const todoContainer = document.getElementById('todos-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.innerHTML = `
            <h3>title:${todo.title}</h3>
            <p>user:${todo.userId}</p>
            <p>completed:${todo.complited}</p>
        `;
        todoContainer.appendChild(todoDiv);

    }
}



 loadTodos();