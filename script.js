$(function () {

  var saveBtn = $('.saveBtn');

  saveBtn.on('click', function (event) {
    var saveTime = $(this).parent().attr("id");
    var saveText = $(this).siblings(".description").val();
  
    localStorage.setItem(saveTime, saveText);
  });


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

  for (let index = 0; index < timeBlocks.length; index++) {
    var saveData = localStorage.getItem(timeBlocks[index].attr("id"));

    timeBlocks[index].children(".description").text(saveData);
  }

  var currentDay = $('#currentDay');
  currentDay.text(dayjs().format('dddd, MMMM D'));
});
