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
    var date = moment().format("dddd, MMMM Do, YYYY, h:mm a");
    currentDate.text(date);
    if(moment().format("mm:ss") === "00:00") location.reload();
}

// Comparing the index Values to current hour and return a class name.
function checkingTimeline(hourIndex) {
    var currentHour = moment().format("H");
    return (hourIndex < currentHour ? "past" : (hourIndex > currentHour ? "future" : "present"));
}



// Creating a function to save user inputs into local storage.
function saveContents() {
    var savedHourlyItem = [];
    for(var i = 0; i < workHours; i++ ) {
        savedHourlyItem.push($(`#${i}hourText`).val());
    }
    localStorage.setItem("savedHourlyItem", JSON.stringify(savedHourlyItem));
}

function showClick(target) {
    target.classList.add("clicked");
    var clickedDisplay = setTimeout(function() {
        target.classList.remove("clicked");
    }, 150);
}
// save data when button is clicked 
function clickSaveButton(event) {
    if($(event.target).hasClass("saveID")) {
        saveContents();
        (event.target.nodeName === "DIV" ? showClick(event.target) : showClick(event.target.parentNode));
    }
}


// Updating time by using setInterval
currentTime();
var updatingTimeInterval = setInterval(currentTime, 1000); 

// load the hours
for(var i = 0; i < workHours; i++) {
    hourContainerEl.append(`
        <div class="row">
            <div class="col-1 hour">
                <p>${moment(i+startHour,"H").format("h a")}</p>
            </div>
            <textarea class="col-10 ${checkingTimeline(i+startHour)}" id="${i}hourText">${unsavedHourlyItem[i]}</textarea>
            <div class="col-1 saveBtn saveID">
                <i class="fas fa-save fa-2x saveID"></i>
            </div>
        </div>
    `);
}

// Event listener click on save button
hourContainerEl.on("click", clickSaveButton);



