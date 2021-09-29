import '../filter-date-dropdown/dist/js/datepicker.min';

var myDatepicker = $(function() {
  $('#calendar').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy'
    }
  }); 
});


var el = document.getElementById("btn_calendar");
$(el).on('click', function() {
  $('#calendar').datepicker().data('datepicker').show();
});