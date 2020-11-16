
var ctx = document.getElementById('myChart').getContext('2d');
var gradientStroke = ctx.createLinearGradient(450, 0, 50, 0); gradientStroke.addColorStop(0, "#ff0000"); gradientStroke.addColorStop(1, "#0000ff");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['.NET', 'SQL', 'CMS', 'Front-End', 'Management','Dev-Ops',],
        datasets: [
            {
                label: 'Skills',
                data: [40, 20, 30, 35, 30, 35],
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
                maxTicksLimit: 5
            }
            , gridLines: {
                
                color: 'rgba(255,255,255,0.3)'

            },
            pointLabels: {
                fontColor: 'rgba(255, 255, 255, 0.7)',
                fontSize: 12
            }
        },
        legend: {
            display: false

        }
    }
});
