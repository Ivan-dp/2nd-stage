import "../../blocks/date-dropdown/date-dropdown";
import "../../blocks/dropdown/dropdown_1";
import "./landing-page.scss";

var titles = document.querySelectorAll('.form .date-dropdown .date-dropdown_box');

var from1 = titles[0].querySelector('h3');
var to1 = titles[1].querySelector('h3');

from1.innerHTML = "прибытие";
to1.innerHTML = "выезд";

var title1 = document.querySelectorAll('.dropdown .dropdown__title__left');

for (let i = 0; i < title1.length; i++) {
  title1[i].innerHTML = "Гости";
}