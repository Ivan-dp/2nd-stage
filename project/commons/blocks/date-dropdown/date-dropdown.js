import './dist/js/datepicker.min';

var $start = $('#from'),
$end = $('#to');

var $doubleDatepicker = $('.doubleDatepicker');

$doubleDatepicker.datepicker({
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
        $end.data('datepicker')
                .update('selectedDates', $start.data('datepicker').selectedDates);
        var start = fd.split('-')[0];
        var end = fd.split('-')[1];
        if (end) {
          $start.val(start);
          $end.val(end);
        } else {
          $end.val('');
        }
        console.log($start.data('datepicker'));
    }
  });


var el = document.getElementById("btn_from");
$(el).on('click', function() {
  $('.from').datepicker().data('datepicker').show();
});
var el1 = document.getElementById("btn_to");
$(el1).on('click', function() {
  $('.to').datepicker().data('datepicker').show();
});