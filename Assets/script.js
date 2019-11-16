// var value = ""
var date = moment().format('dddd MMMM Do');
$('#currentDay').text(date);
var currentTime = moment().format("h:mma"); 
console.log(currentTime);

//Call functio t update date
setInterval(checkTime, 600000);
//Click Events for each timeblock
$(document).one('ready', function () {
    localStorage.clear();
});
//9AM
$('#btn1').on('click', function () {
    var value1 = $("#userEntry1").val();
    localStorage.setItem("Entry1", value1);
});
//10AM
$('#btn2').on('click', function () {
    var value2 = $("#userEntry2").val();
    localStorage.setItem("Entry2", value2);
});
//11AM
$('#btn3').on('click', function () {
    var value3 = $("#userEntry3").val();
    localStorage.setItem("Entry3", value3);
});
//12PM
$('#btn4').on('click', function () {
    var value4 = $("#userEntry4").val();
    localStorage.setItem("Entry4", value4);
});
//1PM
$('#btn5').on('click', function () {
    var value5 = $("#userEntry5").val();
    localStorage.setItem("Entry5", value5);
});
//2PM
$('#btn6').on('click', function () {
    var value6 = $("#userEntry6").val();
    localStorage.setItem("Entry6", value6);
});
//3PMM
$('#btn7').on('click', function () {
    var value7 = $("#userEntry7").val();
    localStorage.setItem("Entry7", value7);
});
//4PM
$('#btn8').on('click', function () {
    var value8 = $("#userEntry8").val();
    localStorage.setItem("Entry8", value8);
});
//5PM
$('#btn9').on('click', function () {
    var value9 = $("#userEntry9").val();
    localStorage.setItem("Entry9", value9);
});


//Function retrieves current date in 'dddd MMMM Do' format and displays it on paege.
function checkTime() {
    let date = moment().format('dddd MMMM Do');
    $('#currentDay').text(date);
}

var endTime = "9:00a"
//Function checks curernt time and changes the background to represent whether it is in the past, present, or future.
if (currentTime > endTime){
    // Add class to change color.
  }

