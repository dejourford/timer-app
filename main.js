// MODAL
var modal = document.getElementById("modal");
var enterBtn = document.querySelector('.enterBtn');

// CLOSES MODAL WHEN ENTER IS CLICKED
enterBtn.onclick = function() {
  modal.style.display = "none";
}

// DEFINE BUTTONS
const thirtyBtn = document.querySelector('#thirtyBtn')
const oneBtn = document.querySelector('#oneBtn')
const fiveBtn = document.querySelector('#fiveBtn')
const tenBtn = document.querySelector('#tenBtn')

// LISTEN FOR SUBMIT BUTTON CLICK
const submitBtn = document.querySelector('.set-time-btn')
submitBtn.addEventListener('click', () => {
    getTime()
   
})


// FUNCTION FOR TURNING SECONDS INTO MINUTE-SECOND FORMAT
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  }




// CREATE FUNCTION TO GET USER TIME
getTime = () => {
    const userTime = document.querySelector('.time-input').value
 // INSERT TIME IN DOM
 let minutesTime = document.querySelector('#minutesTime')




 //  function for second decrement
 let num = userTime * 60;

 let intervalId = setInterval(function() {
   num--;
   console.log(num); // Output: the current value of `num` after decrementing
   minutesTime.textContent = formatTime(num)
addTime()

   if (num <= 0) {
     clearInterval(intervalId); // Stop the loop when `num` reaches 0
   }
 }, 1000);

}

addTime = () => {
    thirtyBtn.addEventListener('click', () => {
        newTime = num + 30
        minutesTime.textContent += newTime
        console.log('thirty')
    })  
}



// need to figure out how 
// to increase time when buttons are clicked
