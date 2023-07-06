// Add event listener to the form
const homeForm = document.getElementById('home-form');
homeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const options = document.getElementById('options').value;

  // Log the values (you can replace this with your desired functionality)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Options:', options);

  // Reset the form
  homeForm.reset();
});
