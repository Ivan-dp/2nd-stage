import './dist/js/datepicker.min';
import '../dropdown/dropdown_1';

var roomRes = document.querySelector('.room-reservation');

var $one = $('.room-reservation .from1'),
$two = $('.room-reservation .to1');

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

var el = roomRes.querySelector("#btn_from");
$(el).on('click', function() {
  $('.from').datepicker().data('datepicker').show();
});
var el1 = roomRes.querySelector("#btn_to");
$(el1).on('click', function() {
  $('.to').datepicker().data('datepicker').show();
});