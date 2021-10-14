import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    step: 100
});

var valueSlider = document.querySelector('.range-slider h3.value');
console.log(valueSlider);

slider.noUiSlider.on('update', function (values) {
    for (let i = 0; i < values.length; i++) {
        values[i] = Math.floor(values[i]) + ' ₽';
    }
    valueSlider.innerHTML = values.join(' - ');
});