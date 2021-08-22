// Get today's date with Moment.js
var today = moment().format("dddd, MMMM Do");

// Set global variables
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hourlyEvents;

// Color code past, present and future hours
var colorCheck = function() {
    $.each(timeArr, function(index, hour) {
        var minutesFrom = moment().diff(moment().hour(hour).minute(0), 'minutes');
        if (minutesFrom < 0) {
            $("." + hour + ".event").addClass("future");
        } else if (minutesFrom > 59) {
            $("." + hour + ".event").removeClass("present");
            $("." + hour + ".event").addClass("past");
        } else {
            $("." + hour + ".event").removeClass("future");
            $("." + hour + ".event").addClass("present");
        } 
    });
}

var loadEvents = function() {
    hourlyEvents = JSON.parse(localStorage.getItem("events"));

    if (!hourlyEvents) {
        createHourlyEventArr();
    } else {
        $.each(hourlyEvents, function(index, hourObj) {
            $('#text-area-' + hourObj.hour).val(hourObj.text)
        });
    }  
}

var createHourlyEventArr = function() {
    hourlyEvents = [];
    $.each(timeArr, function(index, hour) {
        hourlyEvents.push({
            hour: hour,
            text: ""
        });
    });
}

// Add date to header
$('#currentDay').text(today);

loadEvents();
colorCheck();

// Run colorCheck every 10 seconds
setInterval(function() {
    colorCheck();
}, 1000 * 10);

// save button on row was clicked
$(document).on('click', '.saveBtn', function() {
    var updatedHour = parseInt(this.id);
    var updatedText = ($('#text-area-' + updatedHour).val().trim());
    $.each(hourlyEvents, function(index, hourObj) {
        if (hourObj.hour === updatedHour) {
            hourObj.text = updatedText;
        }
    });
    localStorage.setItem("events", JSON.stringify(hourlyEvents));
});