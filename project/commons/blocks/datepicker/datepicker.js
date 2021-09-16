import './dist/js/datepicker.min';

var cardDatepicker = $(function() {
  $('#here').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    // inline: true,
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy'
    }
  }); 
});

cardDatepicker.show();