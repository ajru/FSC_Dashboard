var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();

    opt_load_factor()
    
});


function opt_load_factor() {
    Highcharts.chart('Load_Factor',
        {
            chart: {
                marginTop: 100,
                type: 'gauge',
                backgroundColor: 'transparent',
                alignTicks: false,
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },

            title: {
                text: 'Load Factor',
                style: {
                    color: '#eee'
                },
            },
            exporting: false,
            credits: false,

            pane: {
                startAngle: -120,
                endAngle: 120,
                size: 270,                         
                //center: ['25%', '145%'],                       
                background: {
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                    color:'white',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }

            },

            yAxis: [{
                min: 0,
                max: 160,
                lineColor: '#DDDF0D',
                tickColor: '#933',
                minorTickColor: '#933',   
                offset: -25,
                lineWidth: -10,
                labels: {
                    distance: -15,
                    style: {
                        color: 'white'
                    },
                    rotation: 'auto'
                },
                tickLength: 5,
                minorTickLength: 5,
                endOnTick: false
            }, {
                min: 0,
                max: 240,
                tickPosition: 'outside',
                lineColor: '#339',
                lineWidth: 2,
                color: "white",
                minorTickPosition: 'outside',
                tickColor: '#339',
                minorTickColor: '#339',
                tickLength: 5,
                minorTickLength: 5,
                labels: {
                    distance: 10,
                    style: {
                        color: 'white'
                    },
                    rotation: 'auto'
                },
                offset: -20,
                endOnTick: false
            }],

            series: [{
                name: 'Speed',
                data: [80],
                dial: {
                    backgroundColor: 'transparent',
                    color:'white'
                },
                //dataLabels: {
                //    formatter: function () {
                //        var kmh = this.y,
                //            mph = Math.round(kmh * 0.621);
                //        return '<span style="color:#933">' + kmh + ' km/h</span><br/>' +
                //            '<span style="color:#339">' + mph + ' mph</span>';
                //    },
                //    backgroundColor: {
                //        linearGradient: {
                //            x1: 0,
                //            y1: 0,
                //            x2: 0,
                //            y2: 1
                //        },
                //        stops: [
                //            [0, '#DDD'],
                //            [1, '#FFF']
                //        ]
                //    }
                //},
                //tooltip: {
                //    valueSuffix: ' km/h'
                //}
            }]

        },
        // Add some life
        function (chart) {
            setInterval(function () {
                if (chart.axes) { // not destroyed
                    var point = chart.series[0].points[0],
                        newVal,
                        inc = Math.round((Math.random() - 0.5) * 20);

                    newVal = point.y + inc;
                    if (newVal < 0 || newVal > 200) {
                        newVal = point.y - inc;
                    }

                    point.update(newVal);
                }
            }, 3000);

        });

}
