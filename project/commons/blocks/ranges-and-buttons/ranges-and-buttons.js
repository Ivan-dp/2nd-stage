import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

var slider = document.getElementById('slider');

// var tooltip = slider.noUiSlider.get(true);
// console.log(tooltip);


noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    step: 500
});


// var slider1 = slider.querySelectorAll('.noUi-tooltip');

var valueSlider = document.querySelector('.range-slider h3.value');
console.log(valueSlider);

slider.noUiSlider.on('update', function (values) {
    for (let i = 0; i < values.length; i++) {
        values[i] = Math.floor(values[i]) + ' ₽';
    }
    valueSlider.innerHTML = values.join(' - ');
});

// slider.noUiSlider.on("update", function(values, handle) {
//   valueSlider.innerHTML = values[handle];
// });

// valueSlider.innerHTML = tooltip[0] + ' - ' + tooltip[1];


// const el=document.querySelector('.range-slider');
// const config = {
//     attributes: true
// };

// var min = el.getAttribute("aria-valuenow");
// var max = el.getAttribute("aria-valuemax");

// // Колбэк-функция при срабатывании мутации
// const callback = (mutationsList, observer) => {
//   console.log(mutationsList);
//     for (let mutation of mutationsList) {
//       if (mutation.type === 'attributes') {
//         min = el.getAttribute("aria-valuenow");
//         max = el.getAttribute("aria-valuemax");
//       } 
//       return min, max;
//     }
// };

// // Создаём экземпляр наблюдателя с указанной функцией колбэка
// const observer = new MutationObserver(callback);

// // Начинаем наблюдение за настроенными изменениями целевого элемента
// observer.observe(el, config);

// console.log(min);
// console.log(max);