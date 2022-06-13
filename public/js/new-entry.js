const newEntryDiv = document.getElementById('newEntryResult')

let uploadUrlInput;
const uploadWidgetButton = document.getElementById("upload_widget")
console.log(uploadUrlInput)

//cloudinary widget

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'ddmkrf5bx123', 
    uploadPreset: 's4wgstbl'
}, (error, result) => { 
    if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        uploadUrlInput = result.info.secure_url
        uploadWidgetButton.style.display = 'none'
    }
})

const newEntryHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('#entryTitleForm').value
    const streamingservice_id = document.querySelector('#strServicesOpt').value
    const genre = document.querySelector('#movieGenres').value
    const rating = document.querySelector('#ratingSelect').value
    const yearReleased = parseInt($('#datepicker').val())

    console.log(title, genre, uploadUrlInput)
    await fetch('/api/movieshows/add-entry', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            streamingservice_id: streamingservice_id,
            rating: rating,
            yearReleased: yearReleased,
            image_url: uploadUrlInput,
            genre: genre

        }),
        headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
    .then(newEntry => {
        newEntryDiv.innerHTML = ''

        // newEntry.forEach(movieShow => {
            newEntryDiv.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${image_url}" class="card-img-top" alt=" ">
                <div class="card-body">
                    <p class="card-text">${title}</p>
                    <p class="card-text">${yearReleased}</p>
                    <p class="card-text">genre: ${genre}</p>
                    <p class="card-text">rating: ${rating} stars</p>
                    
                </div>
            </div>`
        // })
    })
};
{/* <p class="card-text">${StreamingService.name}</p> */}
//event listener for cloudinary widget
uploadWidgetButton.addEventListener('click', function(){
    console.log('clicked')
myWidget.open();
}, false);


document.querySelector('#newPostForm').addEventListener('submit', newEntryHandler);


//aa backtrack til here