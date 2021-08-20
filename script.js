// Get today's date with Moment.js
var rightNow = moment().format("dddd, MMMM do");
// Add date to header
$('#currentDay').text(rightNow);