$(document).ready(function(){

var today = moment().format('MMMM Do YYYY');
var $todayDate = $('#currentDay');
  $todayDate.text(today);

var hours=["9 am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]

function createHours(hours) {
    var hourBlock=document.createElement("div");
    var inputBlock=document.createElement("textarea");
    var saveBtn = document.createElement("button");

  

    var div = document.createElement("div");
      div.classList.add("time-block", "row");

    inputBlock.textContent="";
    hourBlock.textContent=hours;
    saveBtn.textContent = "Save";

    div.append(hourBlock);
      hourBlock.classList.add("col-md-2","hour");
    
    div.append(inputBlock);
      inputBlock.classList.add("col-md-9","description");

    div.append(saveBtn);
      saveBtn.classList.add("col-md-1","saveBtn");


      if (hourBlock < currentHour) {
        inputBlock.classList.add("past");
      } else if (hourBlock > currentHour) {
        inputBlock.classList.add("future");
      } else if (hourBlock===currentHour) {
        inputBlock.classList.add("present");
      }



    document.getElementById("plannerContainer").append(div);
    
}
var currentHour= moment().format('h a');
console.log(currentHour);

for(var i = 0; i < hours.length; i++){
    createHours(hours[i])
   
}




})