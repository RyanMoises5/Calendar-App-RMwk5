var saveBtn = $('.saveBtn');
saveBtn.on('click', function (event) {
  var saveTime = $(this).parent().attr("id").split("hour-")[1];
  // var saveText = $(this)
  console.log(saveTime);
  // var saveText = 

});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  var currentHour = dayjs().hour();
  var timeBlocks = [$('#hour-9'),$('#hour-10'),$('#hour-11'),$('#hour-12'),$('#hour-13'),$('#hour-14'),$('#hour-15'),$('#hour-16'),$('#hour-17')];

  for (let index = 0; index < timeBlocks.length; index++) {
    var hourCount = parseInt(timeBlocks[index].attr("id").split("hour-")[1]);

    if (currentHour > hourCount) {
      timeBlocks[index].addClass("past");
    } else if (currentHour === hourCount) {
      timeBlocks[index].addClass("present");
    } else if (currentHour < hourCount) {
      timeBlocks[index].addClass("future");
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var currentDay = $('#currentDay');
  currentDay.text(dayjs().format('dddd, MMMM D'));
});
