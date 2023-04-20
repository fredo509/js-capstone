// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const btnComment = document.getElementById('btnComment');
// Get close modal button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}
// Listen for open click
btnComment.addEventListener('click', openModal);
// Listen for click
closeBtn.addEventListener('click', closeModal);
