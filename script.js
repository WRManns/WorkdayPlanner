//Setting variables by class using jQuery
var save = $('.save-btn');
var timeBlock = $('.hour-segment');
var currentTime = moment().hours();
//Calling current date from moment.js, formatting, and displaying under the cuttentSate class
$(".currentDate").text(moment().format("dddd, MMMM Do"));

function pageLoad() {
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
}
  //Calling function upon app start=up
  $(document).ready(function () {
    pageLoad()
  //Save Button event listener
  save.on("click", function () {
    //Retrieve the values of the note to be saved
    var note = $(this).siblings(".note").val().trim();
    //Save it with the associated time block
    var time = $(this).parent().attr("id");
    //set to local storage
    localStorage.setItem(time, note);
  })  
});
