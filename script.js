// Get today's date with Moment.js
var today = moment().format("dddd, MMMM do");
var todayNumeric = moment().format("DD.MM.YYYY")
var currentTime = moment().format("HH:mm")
var rightNow = (todayNumeric + " " + currentTime)
// Add date to header
$('#currentDay').text(today);

timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
$.each(timeArr, function(index, hour) {
    var timeFrom = moment().diff(moment().hour(hour).minute(0), 'minutes');
    if (timeFrom < 0) {
        $("." + hour + ".event").addClass("future");
    } else if (timeFrom > 60) {
        $("." + hour + ".event").addClass("past");
    } else {
        $("." + hour + ".event").addClass("present");
    } 
    console.log("Time from " + hour + ":00 : " + timeFrom);
})