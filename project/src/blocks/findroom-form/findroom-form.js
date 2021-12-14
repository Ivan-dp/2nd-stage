import "../date-dropdown/date-dropdown";
import "../dropdown/dropdown_1";

var dateDropdownCards = document.querySelectorAll('.form .date-dropdown .date-dropdown__box');

var fromTitle = dateDropdownCards[0].querySelector('h3');
var toTitle = dateDropdownCards[1].querySelector('h3');

fromTitle.innerHTML = "прибытие";
toTitle.innerHTML = "выезд";

var dropdownTitle = document.querySelectorAll('.dropdown .title');

for (let i = 0; i < dropdownTitle.length; i++) {
  dropdownTitle[i].innerHTML = "Гости";
}