$(function () {

  var saveBtn = $('.saveBtn');

  saveBtn.on('click', function (event) {    //  On click of the save button, takes the time (using the id) and the input of the text area and saves it into local storage
    var saveTime = $(this).parent().attr("id");
    var saveText = $(this).siblings(".description").val();
  
    localStorage.setItem(saveTime, saveText);
  });



  var currentHour = dayjs().hour();
  var timeBlocks = [$('#hour-9'),$('#hour-10'),$('#hour-11'),$('#hour-12'),$('#hour-13'),$('#hour-14'),$('#hour-15'),$('#hour-16'),$('#hour-17')];

  for (let index = 0; index < timeBlocks.length; index++) {   // Compares the current time with the time of the block and shades the block grey if the time has passed, red if its the current hour, or green if the time is in the future
    var hourCount = parseInt(timeBlocks[index].attr("id").split("hour-")[1]);

    if (currentHour > hourCount) {
      timeBlocks[index].addClass("past");
    } else if (currentHour === hourCount) {
      timeBlocks[index].addClass("present");
    } else if (currentHour < hourCount) {
      timeBlocks[index].addClass("future");
    }
  }



  for (let index = 0; index < timeBlocks.length; index++) {     // Fills the text area with pre-saved entries in the time slow that was saved 
    var saveData = localStorage.getItem(timeBlocks[index].attr("id"));

    timeBlocks[index].children(".description").text(saveData);
  }



  var currentDay = $('#currentDay');      // Displays day of the week and date at the top of the app
  currentDay.text(dayjs().format('dddd, MMMM D'));
});
