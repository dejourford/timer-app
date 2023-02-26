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
 // INSERT TIME IN DOM
 const minutesTime = document.querySelector('#minutesTime')
 minutesTime.textContent = userTime
}

// LISTEN FOR SUBMIT BUTTON CLICK
const submitBtn = document.querySelector('.set-time-btn')
submitBtn.addEventListener('click', () => {
    getTime()
   
})
