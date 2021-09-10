import './item-quantity-dropdown.min';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
require('./item-quantity-dropdown.min');
require('../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
    maxItems: 15,
    minItems: 0,
    items: {},
    onChange: (id, count, totalItems) => {
      // console.log(totalItems, count, id);
      var tp;
      if (totalItems === 0) {
        return;
      } else if (totalItems >= 5) {
        tp = 'гостей';
      } else if ((totalItems > 1) && (totalItems < 5)) {
        tp = 'гостя';
      } else if (totalItems == 1) {
        tp = 'гость';
      }
      document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
    },
    setSelectionText: (itemCount, totalItems) => {
      // console.log(itemCount, totalItems);
    }
  });
  // $('.dropdown-1 .iqdropdown').iqDropdown({ 
  //   maxItems: 15,
  //   minItems: 0,
  //   items: {},
  //   onChange: (id, count, totalItems) => {
  //     // console.log(totalItems, count, id);
  //     var tp;
  //     if (totalItems === 0) {
  //       return;
  //     } else if (totalItems >= 5) {
  //       tp = 'гостей';
  //     } else if ((totalItems > 1) && (totalItems < 5)) {
  //       tp = 'гостя';
  //     } else if (totalItems == 1) {
  //       tp = 'гость';
  //     }
  //     document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
  //   },
  //   setSelectionText: (itemCount, totalItems) => {
  //     // console.log(itemCount, totalItems);
  //   }
  // });
});
      

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