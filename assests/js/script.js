var currentDateEl = document.querySelector("#currentDay");









window.onload = function() {
    // get the current time/date
    var currentTime = moment();
    // Display the current date 
    currentDateEl.textContent = currentTime.format("dddd, MMMM Do");
}