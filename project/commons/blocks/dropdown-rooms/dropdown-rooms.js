var dr = document.querySelector('.dropdown-rooms');
var d1 = dr.querySelectorAll('.dropdown-1');
var iqd1 = d1[0].querySelector('.iqdropdown');
var iqd2 = d1[1].querySelector('.iqdropdown .menu-open');

$(document).ready(() => {
  $('#rooms').iqDropdown({ 
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
      iqd1.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      iqd2.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
    },
    setSelectionText: (itemCount, totalItems) => {
      // console.log(itemCount, totalItems);
    }
  });
});