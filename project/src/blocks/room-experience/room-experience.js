import Chart from 'chart.js/auto';

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
        datasets: [{
            label: 'My First Dataset',
            data: [130, 65, 65, 0],
            backgroundColor: [
                '#FFE39C',
                '#6FCF97',
                '#BC9CFF',
                '#919191'
            ],
            hoverOffset: 10,
            borderWidth: 1
        }]
    },
    options: {
      cutout: '92%',
      rotation: 180,
      responsive: false,
      viewBox: 120,
      raius: 60,
      layout: {
        padding: {
          left: 0
        }
      },
      plugins: {
        legend: {
          align: 'end',
          position: 'right',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 9,
            fontFamily: 'Montserrat',
            fontSize: 14,
            fontHeight: 24
          }
        }
      }
    }
});