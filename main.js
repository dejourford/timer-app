// MODAL
var modal = document.getElementById("modal");
var enterBtn = document.querySelector('.enterBtn');


enterBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// DEFINE A SECOND
const now = new Date()
const second = now.getSeconds();

