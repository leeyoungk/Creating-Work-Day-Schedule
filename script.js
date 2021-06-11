// Creating Golable variables for current date and hours box

var currentDate = $("#currentDay");
var hourContainerEl = $("#hourContainer");
// set hours for daily working and time to start working in the day.
var workHours = 8;
var startHour = 10;

// creating local Storage for data
var unsavedHourlyItem = JSON.parse(localStorage.getItem("savedHourlyItem")) || emptyTextBars();

// Creating a function for user to input data
function emptyTextBars() {
    var emptyArray = [];
    for ( var i = 0; i < workHours; i++) {
        emptyArray.push("");
    }
    return emptyArray;
}

// Creating a function to run current Date.
function currentTime() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    
}