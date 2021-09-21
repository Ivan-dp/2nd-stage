import "./search-room.scss";
import "../../blocks/date-dropdown/dist/js/datepicker.min";
import "./item-quantity-dropdown.min";
import "./iqdropdown";
import "../../blocks/range-slider/range-slider";

var mainDatepicker = $(function() {
  $('#main-datepicker').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    clearButton: true,
    todayButton: true,
    language: 'ru',
    minDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    dateFormat: 'd M',
    navTitles: {
      days: 'MM yyyy',
      
    }
  }); 
});

var el = document.getElementById("btn-datepicker");
$(el).on('click', function() {
  $('#main-datepicker').datepicker().data('datepicker').show();
});

var rangeParent = document.querySelector(".range-slider");
var rangeTitle = rangeParent.querySelectorAll('.title h3');
rangeTitle[0].innerHTML = "диапазон цены";
var p = document.createElement('p');
p.innerHTML = "<p>Стоимость за сутки пребывания в номере</p>";
rangeParent.appendChild(p);