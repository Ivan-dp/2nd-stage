import "./dist/js/datepicker.min";

var myDatepicker = $(function() {
  $('#calendar_born').datepicker({
    clearButton: true,
    todayButton: true,
    language: 'ru',
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy'
    }
  }); 
});