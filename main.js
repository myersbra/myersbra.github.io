$(document).ready(function() {
  setTime();
;

function setTime() {
  var d = new Date();
  var n = d.getHours();
  document.body.style.backgroundImage = "url('./images/evening.png')";
  document.getElementById("greeting").innerHTML = "Good evening";
}
