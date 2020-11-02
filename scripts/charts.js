
var ctx = document.getElementById('myChart').getContext('2d');
var gradientStroke = ctx.createLinearGradient(500, 0, 50, 0); gradientStroke.addColorStop(0, "#003D6A"); gradientStroke.addColorStop(1, "#fff");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['.NET', 'SQL', 'CMS', 'Front-End'],
        datasets: [
            {
                label: 'Skills',
                data: [40, 20, 30, 35],
                borderColor: gradientStroke,
                
                fontColor: '#fff'
            }
        ]
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 10,
                suggestedMax: 40,
                display: false,
                maxTicksLimit: 10
            }
            , gridLines: {
                
                color: 'rgba(255,255,255,0.3)'

            }
        },
        legend: {
            display:false
        }
    }
});
