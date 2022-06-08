const uploadUrlInput = document.querySelector('[name="upload_url"]')

const uploadWidgetButton = document.getElementById("upload_widget")
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

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title, 
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    document.location.replace('/homepage');

};

uploadWidgetButton.addEventListener('click', function(){
myWidget.open();
}, false);

//AA - make sure id lines up with what Jenna has
document.querySelector('#new-post-form').addEventListener('submit', newEntryHandler);