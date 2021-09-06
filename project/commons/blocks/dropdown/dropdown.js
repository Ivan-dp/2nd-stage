import './item-quantity-dropdown.min';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
require('./item-quantity-dropdown.min');
require('../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
    // selectionText: 'Сколько гостей',
    // textPlural: 'гость',
    textPluralDeclination:['гость','гостя','гостей'],
    items: {},
   });
});

// Присваиваем класс menu-open для элемента iqdropdown в блоках .form-elements__container__column-o
function menuOpen() {
  var parent1 = document.querySelector('.form-elements__container');
  var parent = parent1.querySelectorAll('.form-elements__container__column-o');
  
  // console.log(parent, parent[0], parent[1]);
  
  var element1 = parent[0].querySelector('.dropdown');
  var element2 = parent[1].querySelector('.dropdown');
  
  var el1 = element1.querySelector('.iqdropdown');
  var el2 = element2.querySelector('.iqdropdown');
  
  el1.classList.add("menu-open");
  el2.classList.add("menu-open");
}

menuOpen();