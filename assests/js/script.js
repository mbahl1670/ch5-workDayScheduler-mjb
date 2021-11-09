var currentDateEl = document.querySelector("#currentDay");
var textArea9El = document.querySelector("#nine");



var currentHour = moment().format("H");







window.onload = function() {
    // get the current time/date
    var currentTime = moment();
    // Display the current date 
    currentDateEl.textContent = currentTime.format("dddd, MMMM Do");
    if (currentHour = 22) {
        textArea9El.className = "col-9 past";
    }

}