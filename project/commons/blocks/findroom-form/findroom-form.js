import "../date-dropdown/date-dropdown";
import "../dropdown/dropdown_1";

var dateDropdownCards = document.querySelectorAll('.form .date-dropdown .date-dropdown_box');

var fromTitle = dateDropdownCards[0].querySelector('h3');
var toTitle = dateDropdownCards[1].querySelector('h3');

fromTitle.innerHTML = "прибытие";
toTitle.innerHTML = "выезд";

var dropdownTitle = document.querySelector('.form .dropdown__title__left');

dropdownTitle.innerHTML = "Гости";