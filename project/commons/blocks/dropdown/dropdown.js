import './item-quantity-dropdown.min';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
require('./item-quantity-dropdown.min');
require('../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

  var guest = document.querySelectorAll('#guest');

  function getNameEachId(array) {
    for (var i = 0; i < array.length; i++) {
      var myVar = array[i];
      myVar.setAttribute('id', 'guest_'+[i+1]);
      console.log(myVar);
    }
  }
  getNameEachId(guest);

  var g1 = document.querySelector('#guest_1');
  var g2 = document.querySelector('#guest_2');
  var g3 = document.querySelector('#guest_3');

$(document).ready(() => {
    $(g1).iqDropdown({ 
      maxItems: 15,
      minItems: 0,
      items: {},
      onChange: (id, count, totalItems) => {
        console.log(totalItems, count, id);
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
        g1.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
    $(g2).iqDropdown({ 
      maxItems: 15,
      minItems: 0,
      items: {},
      onChange: (id, count, totalItems) => {
        console.log(totalItems, count, id);
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
        g2.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
    $(g3).iqDropdown({ 
      maxItems: 15,
      minItems: 0,
      items: {},
      onChange: (id, count, totalItems) => {
        console.log(totalItems, count, id);
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
        g3.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
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