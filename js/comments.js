function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => desplayComment(data));
}
function desplayComment(data){
    const commentContainer = document.getElementById('com-container');
    for(const comment of data){
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
            <h4>postId:${comment.postId}</h4>
            <h4>id: ${comment.id}</h4>
            <h3>name: ${comment.name}</h3>
            <h5>email: ${comment.email}</h5>
            <p>body:${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}
loadComment();