async function editFormHandler(event) {
  event.preventDefault();
  
//Locates current document to use PUT method
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_description = document.querySelector(
    'textarea[name="post-description"]'
  ).value;
  const post_address = document.querySelector('input[name="post_address"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_description,
      post_address,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
// Executes function on user submiting edit
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
