import "../filter-date-dropdown/dist/js/datepicker.min";

var myDatepicker = $(function() {
  $('#calendar_born').datepicker({
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