var guests = document.querySelector('#guests');  


var n = guests.querySelectorAll('.iqdropdown-menu .iqdropdown-menu-option');

var n0 = n[0];
var n1 = n[1];
var n2 = n[2];

var rMenu1 = guests.querySelector('.iqdropdown-menu');
$(rMenu1).css('z-index', '100');

// Задаём массивы слов со склонениями для функции выбора слов с правильным склонением

var arr1 = ['Гость', 'Гостя', 'Гостей'];
var arr2 = ['Младенец', 'Младенца', 'Младенцев'];

//Функция для выбора слова с правильным склонением из заготовленного массива слов

function loop(someCount, textArr) {
  var text;
  if (someCount == 1) {
    text = someCount + ' ' + textArr[0];
  } else if (someCount > 1 && someCount < 5) {
    text = someCount + ' ' + textArr[1];
  } else if (someCount >= 5) {
    text = someCount + ' ' + textArr[2];
  } else {
    text = '';
  }
  return text;
}


// Функция сложения строк счётчиков в одну

function varLength(var1, var2, var3) {
  var newText = 'Сколько гостей';
  if (var1.length > 0) {
    newText = '';
    newText += var1;
    if (var2.length > 0) {
      newText = newText + ', ' + var2;
      if (var3.length > 0) {
        newText = newText + ', ' + var3;
      }
    } else if (var3.length > 0) {
      newText = newText + ', ' + var3;
    }
  } else if (var2.length > 0) {
    newText = '';
    newText += var2;
    if (var3.length > 0) {
      newText = newText + ', ' + var3;
    }
  } else if (var3.length > 0) { 
    if (var1.length > 0) {
      newText = var1 + ', ' + var3;
    }
    newText = '';
    newText += var3;
  }
  return newText;
}

$(document).ready(() => {
  $(guests).iqDropdown({ 
      maxItems: 15,
      minItems: 0,
      items: {
        item1: 2,
        item2: 2,
      },
      onChange: (id, count, totalItems) => {
        console.log(totalItems, count, id);
        var nn0 = n0.querySelector('span.counter');
        var nn1 = n1.querySelector('span.counter');
        var nn2 = n2.querySelector('span.counter');

        var counter1 = nn0.outerText;
        var counter2 = nn1.outerText;
        var counter3 = nn2.outerText;

        console.log(counter1, counter2, counter3);

        var text1 = loop(+counter1 + +counter2, arr1);
        // var text2 = loop(counter2, arr2);
        var text3 = loop(counter3, arr2);

        var buttonBlock1 = guests.querySelector('.button-block');

        var clear1 = buttonBlock1.querySelector('.clear-button');
        
        newText = varLength(text1, '', text3);
        // console.log(newText);
        // console.log(text1.length, text2.length, text3.length);
        guests.querySelector('.iqdropdown-selection').innerHTML = newText;
        if (totalItems > 0) {
          $(clear1).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear1).css('visibility', 'hidden');
        }
        var buttonDecrement1 = guests.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement1).click();
          newText = 'Выберите удобства';
          guests.querySelector('.iqdropdown-selection').innerHTML = newText;
        }
        clear1.addEventListener("click", zero);
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
});