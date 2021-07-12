//Function is called when document is ready
$(document).ready(function(){
  
  //saveBtn event listener and functionality
$(".saveBtn").on("click", function(){
  //Retrieve nearby values
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //Save to local storage
  localStorage.setItem(time, value);
}) 


//Hour Updater
function hourUpdater(){
  //Retrieves the current number of hours from moment.js
  var currentHour = moment().hours();
  //Loops over time blocks
  $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      //Check to see if the current hour is past the Time Block's hour
      //And add the "past" class if true
      if(blockHour < currentHour){
          $(this).addClass("past");
      }
      //Checks the time block to see if it matches the current hour
      //If true, remove "past" class and add "present" class
      else if(blockHour === currentHour){
          $(this).removeClass("past");
          $(this).addClass("present");
      }
      //If neither argument is true, removes any class and adds class of "future"
      else
      {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }
  });
}

hourUpdater();


//Checks Local Storage for saved data. If found, retrieves and displays
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

//Current day display on page

$(".currentDay").text(moment().format("dddd, MMMM Do"));
});
