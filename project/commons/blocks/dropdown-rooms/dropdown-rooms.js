// var dr = document.querySelector('.dropdown-rooms');
// var d1 = dr.querySelectorAll('.dropdown-1');
// var iqd1 = d1[0].querySelector('.iqdropdown');
// var iqd2 = d1[1].querySelector('.iqdropdown .menu-open');

var rooms = document.querySelectorAll('#rooms');  

  function getNameEachId2(array) {
    for (var i = 0; i < array.length; i++) {
      var myVar = array[i];
      myVar.setAttribute('id', 'rooms_'+[i+1]);
      console.log(myVar);
    }
  }
  getNameEachId2(rooms);

  var r1 = document.querySelector('#rooms_1');
  var r2 = document.querySelector('#rooms_2');

$(document).ready(() => {
  $(r1).iqDropdown({ 
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
        r1.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
  $(r2).iqDropdown({ 
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
        r2.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + tp;
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
});