$(document).ready(function() {
  setTime();
  if (n > 19 || n < 6)
    document.body.className = "night";
});

function setTime() {
  var d = new Date();
  var n = d.getHours();
  document.body.style.backgroundImage = "url('./images/evening.png')";
  document.getElementById("greeting").innerHTML = "Good evening";
}
