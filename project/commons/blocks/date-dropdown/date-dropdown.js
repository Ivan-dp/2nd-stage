var $start = $('.from'),
$end = $('.to');

var doubleDatepicker = $(function() {
  $start.datepicker({
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy'
    },
    onSelect: function (fd, date) {
      $end.data('datepicker')
      .update('minDate', date);

      $end.focus();
    }
  }),
  $end.datepicker({
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy'
    },
    onSelect: function (fd, date) {
      $start.data('datepicker')
      .update('maxDate', date);
    }
  })
});


var el = document.getElementById("btn_from");
$(el).on('click', function() {
  $('.from').datepicker().data('datepicker').show();
});
var el1 = document.getElementById("btn_to");
$(el1).on('click', function() {
  $('.to').datepicker().data('datepicker').show();
});