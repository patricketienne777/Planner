$(document).ready()
$(function () {
  
  $()
  
  $(".saveBtn").click(function () {
    var textArea = $(this).siblings(".description").val()


    var rowTime = $(this).parent().attr("id")
    console.log(rowTime, textArea)

    localStorage.setItem(rowTime, textArea)

  })

  

  for (let index = 9; index < 18; index++) {

    $("#hour-"+index+ " .description").val(localStorage.getItem("hour-"+index))


  }


  var currentHour = dayjs().hour();

  $ ('.time-block').each(function() {
    var hourEl = $(this).attr('id').split("-")[1]
    console.log(hourEl)
    console.log(currentHour)
    var hour = parseInt(hourEl);
  
    if (hour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    } else if (hour === currentHour) {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');

    } else {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    }
  });
});
