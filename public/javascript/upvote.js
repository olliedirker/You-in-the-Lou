// like button and links the post to the vote backend
async function upvoteClickHandler(event) {
  event.preventDefault();
  //Locates current document to use PUT method
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
<<<<<<< HEAD
// Executes function on user clicking 'like'
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
=======

document
  .querySelector('.upvote-btn')
  .addEventListener('click', upvoteClickHandler);
>>>>>>> 595fd18a6af14e802962d0be145df083336fc56d
