const { MovieShow } = require("../../models");

const uploadUrlInput = document.querySelector('[name="upload_url"]')
const uploadWidgetButton = document.getElementById("upload_widget")

//cloudinary widget
const myWidget = cloudinary.createUploadWidget({
    cloudName: 'ddmkrf5bx123', 
    uploadPreset: 's4wgstbl'
}, (error, result) => { 
    if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        uploadUrlInput.value = result.info.secure_url
        uploadWidgetButton.style.display = 'none'
    }
})

const newEntryHandler = async function(event) {
    event.preventDefault();

    // const title = document.querySelector('input[name="post-title"]').value;
    // const body = document.querySelector('textarea[name="post-body"]').value;
    const title = document.querySelector('#entryTitleFormLab').value
    const streamingservice_id = document.querySelector('#strServicesOpt').value
    const genre = document.querySelector('#movieGenres').value
    const rating = document.querySelector('#ratingSelect').value
    const yearReleased = parseInt($('#releaseYearLab').val())

    const newMovieShow = await MovieShow.create({
        title: title,
        yearReleased: yearReleased,
        genre: genre,
        rating: rating,
        //aa - is this right?
        streamingservice_id: streamingservice_id,
        //aa - how to go about this / getting url from cloudinary?
        image_url: ""
    });

    // await fetch(`/api/post`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title, 
    //         body,
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    // })

};

//event listener for cloudinary widget
uploadWidgetButton.addEventListener('click', function(){
myWidget.open();
}, false);


document.querySelector('#newPostForm').addEventListener('submit', newEntryHandler);