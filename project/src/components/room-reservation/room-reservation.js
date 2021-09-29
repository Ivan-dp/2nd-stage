import './dist/js/datepicker.min';
import '../dropdown/dropdown_1';

var roomRes = document.querySelector('.room-reservation');

var $one = $('#from1'),
$two = $('#to1');

var $newDatepicker = $('.doubleDatepicker-1');

$newDatepicker.datepicker({
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    multipleDatesSeparator: "-",
    navTitles: {
      days: 'MM yyyy'
    },
    range: true,
    onSelect: function (fd, date) {
        $two.data('datepicker')
                .update('selectedDates', $one.data('datepicker').selectedDates);
        var start = fd.split('-')[0];
        var end = fd.split('-')[1];
        if (end) {
          $one.val(start);
          $two.val(end);
        } else {
          $two.val('');
        }
        console.log($one.data('datepicker'));
    }
  });

var el = roomRes.querySelector("#btn_1");
$(el).on('click', function() {
  $('#from1').datepicker().data('datepicker').show();
});
var el1 = roomRes.querySelector("#btn_2");
$(el1).on('click', function() {
  $('#to1').datepicker().data('datepicker').show();
});