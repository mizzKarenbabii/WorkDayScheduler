// this code displays the current date
const d = new Date();
document.getElementById("currentDay").innerHTML = d;



//single event i.e. alarm, time in milliseconds
var timeout = setTimeout(function(){yourFunction()},10000);
//repeated events, gap in milliseconds
var interval = setInterval(function(){yourFunction()},1000);