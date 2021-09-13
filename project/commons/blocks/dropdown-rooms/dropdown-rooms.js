var rooms = document.querySelectorAll('#rooms');  

// Функция для задания ID дропдаунам 

function getNameEachId2(array) {
  for (var i = 0; i < array.length; i++) {
    var myVar = array[i];
    myVar.setAttribute('id', 'rooms_'+[i+1]);
    console.log(myVar);
  }
}
getNameEachId2(rooms);


// Присваиваем селекторы значениям переменных

var r1 = document.querySelector('#rooms_1');
var r2 = document.querySelector('#rooms_2');

var n = r1.querySelectorAll('.iqdropdown-menu .iqdropdown-menu-option');

var n0 = n[0];
var n1 = n[1];
var n2 = n[2];


var m = r2.querySelectorAll('.iqdropdown-menu .iqdropdown-menu-option');

var m0 = m[0];
var m1 = m[1];
var m2 = m[2];

var rMenu1 = r1.querySelector('.iqdropdown-menu');
var rMenu2 = r2.querySelector('.iqdropdown-menu');
$(rMenu1).css('z-index', '100');
$(rMenu2).css('z-index', '99');


// var b = r1.querySelectorAll('.iqdropdown-menu-option');
// var c = r2.querySelectorAll('.iqdropdown-menu-option');
// b[0].setAttribute("data-defaultcount", 2);
// b[1].setAttribute("data-defaultcount", 2);
// c[0].setAttribute("data-defaultcount", 2);
// c[1].setAttribute("data-defaultcount", 2);
// var buttonBlock2 = r2.querySelector('.button-block');
// var clear2 = buttonBlock2.querySelector('.clear-button');
// $(clear2).css('visibility', 'visible');



// Задаём массивы слов со склонениями для функции выбора слов с правильным склонением

var arr1 = ['Спальня', 'Спальни', 'Спален'];
var arr2 = ['Кровать', 'Кровати', 'Кроватей'];
var arr3 = ['Ванная комната', 'Ванные комнаты', 'Ванных комнат'];


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
  var newText = 'Выберите удобства';
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
  $(r1).iqDropdown({ 
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

        var text1 = loop(counter1, arr1);
        var text2 = loop(counter2, arr2);
        var text3 = loop(counter3, arr3);

        var buttonBlock1 = r1.querySelector('.button-block');

        var clear1 = buttonBlock1.querySelector('.clear-button');
        
        newText = varLength(text1, text2, text3);
        console.log(newText);
        console.log(text1.length, text2.length, text3.length);
        r1.querySelector('.iqdropdown-selection').innerHTML = newText;
        if (totalItems > 0) {
          $(clear1).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear1).css('visibility', 'hidden');
        }
        var buttonDecrement1 = r1.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement1).click();
          newText = 'Выберите удобства';
          r1.querySelector('.iqdropdown-selection').innerHTML = newText;
        }
        clear1.addEventListener("click", zero);
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
        var mm0 = m0.querySelector('span.counter');
        var mm1 = m1.querySelector('span.counter');
        var mm2 = m2.querySelector('span.counter');

        var counter1 = mm0.outerText;
        var counter2 = mm1.outerText;
        var counter3 = mm2.outerText;

        console.log(counter1, counter2, counter3);

        var text1 = loop(counter1, arr1);
        var text2 = loop(counter2, arr2);
        var text3 = loop(counter3, arr3);
        
        var buttonBlock2 = r2.querySelector('.button-block');

        var clear2 = buttonBlock2.querySelector('.clear-button'); 
        
        newText = varLength(text1, text2, text3);
        console.log(newText);
        console.log(text1.length, text2.length, text3.length);
        r2.querySelector('.iqdropdown-selection').innerHTML = newText;
        if (totalItems > 0) {
          $(clear2).css('visibility', 'visible');
        } else if (totalItems === 0) {
          $(clear2).css('visibility', 'hidden');
        }
        var buttonDecrement2 = r2.querySelectorAll('.button-decrement');
        function zero() {
          $(buttonDecrement2).click();
          newText = 'Выберите удобства';
          r2.querySelector('.iqdropdown-selection').innerHTML = newText;
        }
        clear2.addEventListener("click", zero);
      },
      setSelectionText: (itemCount, totalItems) => {
      }
    });
  
});


// r2.addEventListener('')