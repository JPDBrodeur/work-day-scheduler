// Get today's date with Moment.js
var today = moment().format("dddd, MMMM do");
// Add date to header
$('#currentDay').text(today);

var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$.each(timeArr, function(index, hour) {
    var minutesFrom = moment().diff(moment().hour(hour).minute(0), 'minutes');
    if (minutesFrom < 0) {
        $("." + hour + ".event").addClass("future");
    } else if (minutesFrom > 59) {
        $("." + hour + ".event").addClass("past");
    } else {
        $("." + hour + ".event").addClass("present");
    } 
    console.log("Minutes from " + hour + ":00 : " + minutesFrom);
})