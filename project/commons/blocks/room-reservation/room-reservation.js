import '../filter-date-dropdown/dist/js/datepicker.min';
import '../dropdown/dropdown_1';

var $one = $('.room-reservation .from'),
$two = $('.room-reservation .to');

var newDatepicker = $(function() {
  $one.datepicker({
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
      $two.data('datepicker')
      .update('minDate', date);

      $two.focus();
    }
  }),
  $two.datepicker({
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
      $one.data('datepicker')
      .update('maxDate', date);
    }
  })
});

var parent = document.querySelector('.room-reservation');

var start = parent.querySelector('.from');
var end = parent.querySelector('.to');

var el = parent.querySelector("#btn_from");
$(el).on('click', function() {
  $('.from').datepicker().data('datepicker').show();
});
var el1 = parent.querySelector("#btn_to");
$(el1).on('click', function() {
  $('.to').datepicker().data('datepicker').show();
});