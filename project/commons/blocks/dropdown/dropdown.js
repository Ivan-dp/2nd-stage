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


// var parent = document.querySelector('.iqdropdown-menu');

// var btnBlock = document.createElement('div');
// parent.appendChild(btnBlock);
// btnBlock.className = 'button-block';


// var clearBtn = document.createElement('button');
// clearBtn.innerHTML = '<p>Очистить</p>';
// btnBlock.appendChild(clearBtn);
// clearBtn.className = 'clear-button';


// var applyBtn = document.createElement('button');
// applyBtn.innerHTML = '<p>Применить</p>';
// btnBlock.appendChild(applyBtn);
// applyBtn.className = 'apply-button';