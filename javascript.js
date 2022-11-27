$(document).ready(function () {

    $( ".saveBtn" ).click(function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);

        $('.notifyappointment').addClass('show');

        setTimeout(function () {
            $('.notifyappointment').removeClass('show');
        }, 5000);
    });
      
    $('.time-block').each(function() {
        var id = $(this).attr('id');
        var hour = Number(id.replace('hour-', ''));
        var currentHour = dayjs().hour();
        $(this).removeClass('present past future');
        if (hour === currentHour) {
            $(this).addClass('present');
        } else if (currentHour > hour) {
            $(this).addClass('past');
        } else {
            $(this).addClass('future');
        } 

        var currentText = localStorage.getItem(id);
        if (currentText) {
            $(this).children('.description').val(currentText);
        }
        
    })

    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });
  