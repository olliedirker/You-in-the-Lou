// listens for the delete button and then deletes post from the edit-post page
async function deleteFormHandler(event) {
  event.preventDefault();
  
// Locates current document to use DELETE method
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
<<<<<<< HEAD
// Executes function on user clicking delete button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
=======

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', deleteFormHandler);
>>>>>>> 595fd18a6af14e802962d0be145df083336fc56d
