// function creates a comment on the single-post page
async function commentFormHandler(event) {
  event.preventDefault();
<<<<<<< HEAD
  
//Locates current document to use POST method
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
=======

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
>>>>>>> 595fd18a6af14e802962d0be145df083336fc56d
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
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
}
<<<<<<< HEAD
// Execute function on user submiting comment
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
=======

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
>>>>>>> 595fd18a6af14e802962d0be145df083336fc56d
