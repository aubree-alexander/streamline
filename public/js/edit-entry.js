//AA - THIS IS A FEATURE

const editEntry = async function(event) {
    event.preventDefault();


    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      document.location.replace('/');

 
};

//AA - update id here
document.querySelector('#').addEventListener('submit', editEntry);




