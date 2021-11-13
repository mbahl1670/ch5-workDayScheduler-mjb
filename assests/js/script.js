var currentDateEl = document.querySelector("#currentDay");




// gets the curront hour in military time 
var currentHour = moment().format("H");
    

// function that color codes the daily planner
// I know there must be an easier way to do this, but running out of time and this works
// Sets all of the blocks to being in the future
// goes down each block to see if it is the same time or in the past then chagnes the class to 
// mactch after removing whatever old class is present.  removes all classes in case this loads in the 
// middle of the work day
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


// saves the text area informatoin to local storage under the hour it is entered in
var saveTask = function(event) {
    var targetEl = event.target;
    hourID = targetEl.getAttribute("data-hour");
    console.log(hourID);

    textInfoEl = document.querySelector("#" + hourID);
    localStorage.setItem(hourID, textInfoEl.value);
}

var loadSchedule = function() {
    $("#nine").val(localStorage.getItem("nine"));
    $("#ten").val(localStorage.getItem("ten"));
    $("#eleven").val(localStorage.getItem("eleven"));
    $("#twelve").val(localStorage.getItem("twelve"));
    $("#one").val(localStorage.getItem("one"));
    $("#two").val(localStorage.getItem("two"));
    $("#three").val(localStorage.getItem("three"));
    $("#four").val(localStorage.getItem("four"));
    $("#five").val(localStorage.getItem("five"));
}


// event listener for when a save button is clicked 
$(".saveBtn").click(saveTask);


// Function will start as soon as page is loaded
window.onload = function() {
    // get the current time/date
    var currentTime = moment();
    // Display the current date 
    currentDateEl.textContent = currentTime.format("dddd, MMMM Do");
    updateHour();
    loadSchedule();
}