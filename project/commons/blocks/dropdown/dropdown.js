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
  
  console.log(g1.id, g2.id, g3.id);

  
  
$(document).ready(() => {
    $(g1).iqDropdown({ 
      maxItems: 15,
      minItems: 0,
      items: {},
      onChange: (id, count, totalItems) => {
        console.log(totalItems, count, id);
        var tp;
        if (totalItems === 0) {
          tp = 'Сколько гостей';
        } else if (totalItems >= 5) {
          tp = totalItems + ' гостей';
        } else if ((totalItems > 1) && (totalItems < 5)) {
          tp = totalItems + ' гостя';
        } else if (totalItems == 1) {
          tp = totalItems + ' гость';
        }
        g1.querySelector('.iqdropdown-selection').innerHTML = tp;
        var buttonBlock1 = g1.querySelector('.button-block');
        var clear1 = buttonBlock1.querySelector('.clear-button');
        if (totalItems > 0) {
          $(clear1).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear1).css('visibility', 'hidden');
        }
        var buttonDecrement1 = g1.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement1).click();
          tp = 'Сколько гостей';
          g1.querySelector('.iqdropdown-selection').innerHTML = tp;
        }
        clear1.addEventListener("click", zero);
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
          tp = 'Сколько гостей';
        } else if (totalItems >= 5) {
          tp = totalItems + ' гостей';
        } else if ((totalItems > 1) && (totalItems < 5)) {
          tp = totalItems + ' гостя';
        } else if (totalItems == 1) {
          tp = totalItems + ' гость';
        }
        g2.querySelector('.iqdropdown-selection').innerHTML = tp;
        var buttonBlock2 = g2.querySelector('.button-block');
        var clear2 = buttonBlock2.querySelector('.clear-button');
        if (totalItems > 0) {
          $(clear2).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear2).css('visibility', 'hidden');
        }
        var buttonDecrement2 = g2.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement2).click();
          tp = 'Сколько гостей';
          g2.querySelector('.iqdropdown-selection').innerHTML = tp;
        }
        clear2.addEventListener("click", zero);
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
          tp = 'Сколько гостей';
        } else if (totalItems >= 5) {
          tp = totalItems + ' гостей';
        } else if ((totalItems > 1) && (totalItems < 5)) {
          tp = totalItems + ' гостя';
        } else if (totalItems == 1) {
          tp = totalItems + ' гость';
        }
        g3.querySelector('.iqdropdown-selection').innerHTML = tp;
        var buttonBlock3 = g3.querySelector('.button-block');
        var clear3 = buttonBlock3.querySelector('.clear-button'); 
        if (totalItems > 0) {
          $(clear3).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear3).css('visibility', 'hidden');
        }
        var buttonDecrement3 = g3.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement3).click();
          tp = 'Сколько гостей';
          g3.querySelector('.iqdropdown-selection').innerHTML = tp;
        }
        clear3.addEventListener("click", zero);
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