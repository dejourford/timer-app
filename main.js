// MODAL
var modal = document.getElementById("modal");
var enterBtn = document.querySelector('.enterBtn');

// CLOSES MODAL WHEN ENTER IS CLICKED
enterBtn.onclick = function() {
  modal.style.display = "none";
}



// CREATE FUNCTION TO GET USER TIME
getTime = () => {
    const userTime = document.querySelector('.time-input').value
 // INSERT TIME IN DOM
 let minutesTime = document.querySelector('#minutesTime')
 minutesTime.textContent = userTime + ":" + "0" + "0"
 userTimeToNumber = parseInt(minutesTime.textContent)
//  CONVERT USER TIME IN MINUTES TO SECONDS
 userTimeInSeconds(userTimeToNumber)
 let numUserTimeInSeconds = Number(userTimeInSeconds)
 
//  function for second decrement
 let num = 60;

 let intervalId = setInterval(function() {
   num--;
   console.log(num); // Output: the current value of `num` after decrementing
 
   if (num <= 0) {
     clearInterval(intervalId); // Stop the loop when `num` reaches 0
   }
 }, 1000);

}

// LISTEN FOR SUBMIT BUTTON CLICK
const submitBtn = document.querySelector('.set-time-btn')
submitBtn.addEventListener('click', () => {
    getTime()
   
})

// DEFINE A SECOND
const now = new Date()
const second = now.getSeconds();
// DEFINE USER TIME IN SECONDS
const userTimeInSeconds = (userTimeToNumber) => {
    return userTimeToNumber * 60
}


