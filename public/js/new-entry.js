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

//AA - make sure id lines up with what Jenna has
document.querySelector('#new-post-form').addEventListener('submit', newEntryHandler);