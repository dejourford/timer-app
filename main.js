// MODAL
var modal = document.getElementById("modal");
var enterBtn = document.querySelector('.enterBtn');

// CLOSES MODAL WHEN ENTER IS CLICKED
enterBtn.onclick = function() {
  modal.style.display = "none";
}

// DEFINE A SECOND
const now = new Date()
const second = now.getSeconds();






// CREATE FUNCTION TO GET USER TIME
getTime = () => {
    const userTime = document.querySelector('.time-input').value
    console.log(userTime)
}

const submitBtn = document.querySelector('.set-time-btn').addEventListener('click', getTime)