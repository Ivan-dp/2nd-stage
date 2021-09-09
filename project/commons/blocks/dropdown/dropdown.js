import './item-quantity-dropdown.min';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
require('./item-quantity-dropdown.min');
require('../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
    maxItems: 15,
    minItems: 1,
    selectionText: 'Сколько гостей',
    // items: {},
    // textPlural: 'гостей',
    onChange: (id, count, totalItems) => {
      // console.log(id, ' ', count, ' ', totalItems);
      // console.log(this);
      var tp;
      if ((totalItems >= 5) || (totalItems === 0)) {
        tp = 'гостей';
      } else if ((totalItems > 1) && (totalItems < 5)) {
        tp = 'гостя';
      } else if (totalItems == 1) {
        tp = 'гость';
      }
      document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
    }
  });
  // console.log(this);
});
// console.log(this);

// var obj = $('.iqDropdown').iqDropdown;
// console.log(obj.['textPlural']);


function menuOpen() {
  var parent1 = document.querySelector('.form-elements__container');
  var parent = parent1.querySelectorAll('.form-elements__container__column-o');
  
  var element1 = parent[0].querySelector('.dropdown');
  var element2 = parent[1].querySelector('.dropdown');
  
  var el1 = element1.querySelector('.iqdropdown');
  var el2 = element2.querySelector('.iqdropdown');
  
  el1.classList.add("menu-open");
  el2.classList.add("menu-open");
}

menuOpen();