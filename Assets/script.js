
var savedEntries = [];
let date = moment().format('dddd MMMM Do');
console.log(date);
$('#currentDay').text(date);

$('#saveBtn').on('click', function(){
    $('.description').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});



//User entry field has a different background color depending on whether the entry is saved in the past present or future.
// let hour = moment().format('h a');
// console.log(hour);

// console.log(moment('h').isAfter('h')); // returns false
// console.log(moment('2010-11-20').isAfter('2010-10-19')); // returns true