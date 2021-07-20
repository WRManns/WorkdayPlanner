//Setting variables by class using jQuery
var save = $('.save-btn');
var timeBlock = $('.hour-segment');
var currentTime = moment().hours();

//Running function upon app start=up
$(document).ready(function () {

  //Format and display current day
  $(".currentDay").text(moment().format("dddd, MMMM Do"));

  //Checks local storage for saved notes associated with the hour blocks
  $("#9 .note").val(localStorage.getItem("9"));

  $("#10 .note").val(localStorage.getItem("10"));

  $("#11 .note").val(localStorage.getItem("11"));

  $("#12 .note").val(localStorage.getItem("12"));

  $("#13 .note").val(localStorage.getItem("13"));

  $("#14 .note").val(localStorage.getItem("14"));

  $("#15 .note").val(localStorage.getItem("15"));

  $("#16 .note").val(localStorage.getItem("16"));

  $("#17 .note").val(localStorage.getItem("17"));

  function hourColor() {

    //Iterating through the hour-block classes to check the hour ID against the current time
    timeBlock.each(function() {
        var hour = parseInt($(this).attr('id'));
        if(hour === currentTime) {
            $(this).addClass('current');
        } else if(currentTime > hour) {
            $(this).addClass('past');
        }else {
            $(this).addClass('future');
        }
    });
  }

  //Calling the hourColor function
  hourColor();

  //Save Button event listener
  save.on("click", function () {
    //Retrieve nearby values
    var note = $(this).siblings(".note").val().trim();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, note);
  })  
});
