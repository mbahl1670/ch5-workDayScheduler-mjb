var currentDateEl = document.querySelector("#currentDay");
var textArea9El = document.querySelector("#nine");




var currentHour = moment().format("H");
    
var updateHour = function() {
    $("textarea").addClass("col-9 future");

    if (currentHour == 9) {
        $("#nine").removeClass().addClass("col-9 present");
    } else if (currentHour >9) {
        $("#nine").removeClass().addClass("col-9 past");
    }

    if (currentHour == 10) {
        $("#ten").removeClass().addClass("col-9 present");
    } else if (currentHour >10) {
        $("#ten").removeClass().addClass("col-9 past");
    }

    if (currentHour == 11) {
        $("#eleven").removeClass().addClass("col-9 present");
    } else if (currentHour >11) {
        $("#eleven").removeClass().addClass("col-9 past");
    }

    if (currentHour == 12) {
        $("#twelve").removeClass().addClass("col-9 present");
    } else if (currentHour >12) {
        $("#twelve").removeClass().addClass("col-9 past");
    }

    if (currentHour == 13) {
        $("#one").removeClass().addClass("col-9 present");
    } else if (currentHour >13) {
        $("#one").removeClass().addClass("col-9 past");
    }

    if (currentHour == 14) {
        $("#two").removeClass().addClass("col-9 present");
    } else if (currentHour >14) {
        $("#two").removeClass().addClass("col-9 past");
    }

    if (currentHour == 15) {
        $("#three").removeClass().addClass("col-9 present");
    } else if (currentHour >15) {
        $("#three").removeClass().addClass("col-9 past");
    }

    if (currentHour == 16) {
        $("#four").removeClass().addClass("col-9 present");
    } else if (currentHour >16) {
        $("#four").removeClass().addClass("col-9 past");
    }

    if (currentHour == 17) {
        $("#five").removeClass().addClass("col-9 present");
    } else if (currentHour >17) {
        $("#five").removeClass().addClass("col-9 past");
    }
}


window.onload = function() {
    // get the current time/date
    var currentTime = moment();
    // Display the current date 
    currentDateEl.textContent = currentTime.format("dddd, MMMM Do");
    console.log(currentHour);
    updateHour();
}