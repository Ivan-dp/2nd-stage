import "../../blocks/date-dropdown/date-dropdown";
import "../../blocks/dropdown/dropdown_1";
import "./index.scss";


var title = document.querySelectorAll('.date-dropdown__title');
console.log(title);
title[0].innerHTML = "Прибытие";
title[1].innerHTML = "Выезд";

var title2 = document.querySelectorAll('.dropdown__title');
title2[0].innerHTML = "Гости";