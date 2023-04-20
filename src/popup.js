// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const btnComment = document.getElementById('btnComment');
// Get close modal button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
btnComment.addEventListener('click', btnComment);
// Listen for click
closeBtn.addEventListener('click', closeModal);

//Function to open modal
function openModal(){
  modal.style.display = 'block';
}

//Function to close modal
function closeModal () {
  modal.style.display = 'none';
}
