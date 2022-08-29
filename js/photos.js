function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => desplayPhotos(data))
}
function desplayPhotos(photos){
    const photoContainer =document.getElementById('photo-container');
    for(const photo of photos){
        const photoDiv =document.createElement('div');
        photoDiv.classList.add('photo')
        photoDiv.innerHTML=`
            <p>AlbumId:${photo.albumId}</p>
            <p>id:${photo.id}</p>
            <p>title:${photo.title}</p>
            <p>Url:${photo.url}</p>
            <p>thumbnailUrl:${photo.thumbnailUrl}</p>

        `;
        photoContainer.appendChild(photoDiv);
    }
}
loadPhotos();