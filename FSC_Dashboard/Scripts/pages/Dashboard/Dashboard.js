var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();


    flight_section_DomasticDepart_chart();
    flight_section_InternationDepart_chart();
    flight_type_analysis_chart();
    flight_AircraftUtilization_chart();

    // otp charts
    otp_overall_chart()
    otp_SectorType_chart()
    otp_metro_chart()
    opt_load_factor()
    disruption_chart()
    delay_analysis_chart()
    plannedVsActual_chart()
});


// Flifgt Section Charts
function flight_section_DomasticDepart_chart() {

    var gaugeOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: 'transparent',
        },

        title: null,

        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                //backgroundColor:
                //    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -90
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -20,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    var chartSpeed = Highcharts.chart('gauge_DomasticDepart', Highcharts.merge(gaugeOptions, {

        yAxis: {
            min: 0,
            max: 200,
            title: {
                style: {
                    color: '#eee'
                },
                margin:50,
                text: 'Domastic Departure'               
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Domastic Departure',
            data: [80],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px;color:rgb(255,255,255,1)">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4;color:"white""></span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: ' '
            }
        }]

    }));
  

    // Bring life to the dials
    setInterval(function () {
        // Speed
        var point,
            newVal,
            inc;

        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
     
    }, 2000);



}

function flight_section_InternationDepart_chart() {

    var gaugeOptions = {
        chart: {
            type: 'solidgauge',
           backgroundColor: 'transparent',
        },

        title: null,

        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                //backgroundColor:                   
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -90
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -20,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    var chartSpeed = Highcharts.chart('gauge_InternationalDepart', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            title: {
                style: {
                    color: '#eee'
                },
                text: 'Internation Departure'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Internation Departure',
            data: [80],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px;color:rgb(255,255,255,1)">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4;color:rgb(255,255,255,1)"></span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: ' '
            }
        }]

    }));
  

    // Bring life to the dials
    setInterval(function () {
        // Speed
        var point,
            newVal,
            inc;

        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
       
    }, 2000);

}

function flight_type_analysis_chart() {

    Highcharts.chart('bar_flightTypeAnlysis', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },
        title: {
            style: {
                color: '#eee'
            },
            margin:10, 
            text: 'Flight Type Analysis'
        },
        exporting: false,
        credits: false,
        //subtitle: {
        //    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        //},
        accessibility: {
            announceNewData: {
                enabled: false
            }
        },
        xAxis: {
            //type: 'category'
            visible: false,
        },
        yAxis: {           
            visible: false,
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: [
                    {
                        name: "Chrome",
                        y: 62.74,
                        drilldown: "Chrome"
                    },
                    {
                        name: "Firefox",
                        y: 10.57,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Internet Explorer",
                        y: 7.23,
                        drilldown: "Internet Explorer"
                    },
                    {
                        name: "Safari",
                        y: 5.58,
                        drilldown: "Safari"
                    },
                    {
                        name: "Edge",
                        y: 4.02,
                        drilldown: "Edge"
                    },
                    {
                        name: "Opera",
                        y: 1.92,
                        drilldown: "Opera"
                    },
                    {
                        name: "Other",
                        y: 7.62,
                        drilldown: null
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: "Chrome",
                    id: "Chrome",
                    data: [
                        [
                            "v65.0",
                            0.1
                        ],
                        [
                            "v64.0",
                            1.3
                        ],
                        [
                            "v63.0",
                            53.02
                        ],
                        [
                            "v62.0",
                            1.4
                        ],
                        [
                            "v61.0",
                            0.88
                        ],
                        [
                            "v60.0",
                            0.56
                        ],
                        [
                            "v59.0",
                            0.45
                        ],
                        [
                            "v58.0",
                            0.49
                        ],
                        [
                            "v57.0",
                            0.32
                        ],
                        [
                            "v56.0",
                            0.29
                        ],
                        [
                            "v55.0",
                            0.79
                        ],
                        [
                            "v54.0",
                            0.18
                        ],
                        [
                            "v51.0",
                            0.13
                        ],
                        [
                            "v49.0",
                            2.16
                        ],
                        [
                            "v48.0",
                            0.13
                        ],
                        [
                            "v47.0",
                            0.11
                        ],
                        [
                            "v43.0",
                            0.17
                        ],
                        [
                            "v29.0",
                            0.26
                        ]
                    ]
                },
                {
                    name: "Firefox",
                    id: "Firefox",
                    data: [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                },
                {
                    name: "Internet Explorer",
                    id: "Internet Explorer",
                    data: [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                },
                {
                    name: "Safari",
                    id: "Safari",
                    data: [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                },
                {
                    name: "Edge",
                    id: "Edge",
                    data: [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                },
                {
                    name: "Opera",
                    id: "Opera",
                    data: [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }
            ]
        }
    });
}

function flight_AircraftUtilization_chart() {
    Highcharts.chart('container1', {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',     
            marginTop:-100,
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: -20,
            y: 70,
            color: '#eee'          
        },
        exporting: false,
        credits: false,
        title: {
            text: 'Aircraft utilization',
            margin: 10, 
            style: {
                color: '#eee'
            },
        },   
        plotOptions: {
            pie: {
                //innerSize: 200,
                shadow: false,
                //depth: 100
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
            }
        },
        series: [{
            name: 'Browsers',
            data: [["Firefox", 6], ["MSIE", 4], ["Chrome", 7]],
            size: '50%',
            innerSize: '60%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            }
        }]
    });
}


// OTP section Charts

function otp_overall_chart() {

    $('#overalotp').highcharts({
        colors: ['#33ee00', '#006622'],
        chart: {
           /* type: 'pie',*/
            backgroundColor: 'transparent',
            marginTop: -100,
        },
        title: {
            text: '35%',
            y: -40,
            verticalAlign: 'middle',
            style: {
                color: '#eee'
            },
        },
        subtitle: {
            text: 'Over All OTP',
            style: {
                color: '#eee'
            },
        },
        exporting: false,
        credits: false,
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            size: '50%',
            innerSize: '75%',
            data: [65, 35]
        }]
    });
}

function otp_SectorType_chart() {
    Highcharts.chart('otp_sector', {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            marginTop: -100,
        },
        legend: {
            //align: 'right',
            //verticalAlign: 'top',
            //layout: 'vertical',
            x: -20,
            y: 70,
            color: '#eee'
        },
        exporting: false,
        credits: false,
        title: {
            text: 'Sector Type OTP',
            margin: 10,
            style: {
                color: '#eee'
            },
        },
        plotOptions: {
            pie: {
                //innerSize: 200,
                shadow: false,
                //depth: 100
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
            }
        },
        series: [{
            name: 'Browsers',
            data: [["Firefox", 6], ["MSIE", 4], ["Chrome", 7]],
            size: '60%',
            innerSize: '60%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            }
        }]
    });
}

function otp_metro_chart() {

    Highcharts.chart('bar_otp_metro', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },
        title: {
            style: {
                color: '#eee'
            },
            margin: 10,
            text: 'Flight Type Analysis'
        },
        exporting: false,
        credits: false,
        //subtitle: {
        //    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        //},
        accessibility: {
            announceNewData: {
                enabled: false
            }
        },
        xAxis: {
            //type: 'category'
            visible: false,
        },
        yAxis: {
            visible: false,
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: [
                    {
                        name: "Chrome",
                        y: 62.74,
                        drilldown: "Chrome"
                    },
                    {
                        name: "Firefox",
                        y: 10.57,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Internet Explorer",
                        y: 7.23,
                        drilldown: "Internet Explorer"
                    },
                    {
                        name: "Safari",
                        y: 5.58,
                        drilldown: "Safari"
                    },
                    {
                        name: "Edge",
                        y: 4.02,
                        drilldown: "Edge"
                    },
                    {
                        name: "Opera",
                        y: 1.92,
                        drilldown: "Opera"
                    },
                    {
                        name: "Other",
                        y: 7.62,
                        drilldown: null
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: "Chrome",
                    id: "Chrome",
                    data: [
                        [
                            "v65.0",
                            0.1
                        ],
                        [
                            "v64.0",
                            1.3
                        ],
                        [
                            "v63.0",
                            53.02
                        ],
                        [
                            "v62.0",
                            1.4
                        ],
                        [
                            "v61.0",
                            0.88
                        ],
                        [
                            "v60.0",
                            0.56
                        ],
                        [
                            "v59.0",
                            0.45
                        ],
                        [
                            "v58.0",
                            0.49
                        ],
                        [
                            "v57.0",
                            0.32
                        ],
                        [
                            "v56.0",
                            0.29
                        ],
                        [
                            "v55.0",
                            0.79
                        ],
                        [
                            "v54.0",
                            0.18
                        ],
                        [
                            "v51.0",
                            0.13
                        ],
                        [
                            "v49.0",
                            2.16
                        ],
                        [
                            "v48.0",
                            0.13
                        ],
                        [
                            "v47.0",
                            0.11
                        ],
                        [
                            "v43.0",
                            0.17
                        ],
                        [
                            "v29.0",
                            0.26
                        ]
                    ]
                },
                {
                    name: "Firefox",
                    id: "Firefox",
                    data: [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                },
                {
                    name: "Internet Explorer",
                    id: "Internet Explorer",
                    data: [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                },
                {
                    name: "Safari",
                    id: "Safari",
                    data: [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                },
                {
                    name: "Edge",
                    id: "Edge",
                    data: [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                },
                {
                    name: "Opera",
                    id: "Opera",
                    data: [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }
            ]
        }
    });
}

function opt_load_factor() {
    Highcharts.chart('meter_load_factor',
        {
            chart: {
                marginTop: -100,
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
                startAngle: -150,
                endAngle: 150,
                size:190
            },

            yAxis: [{
                min: 0,
                max: 200,
                lineColor: '#339',
                tickColor: '#339',
                minorTickColor: '#339',
                offset: -25,
                lineWidth: 2,
                labels: {
                    distance: -10,
                    rotation: 'auto'
                },
                tickLength: 5,
                minorTickLength: 5,
                endOnTick: false
            }, {
                min: 0,
                max: 124,
                tickPosition: 'outside',
                lineColor: '#933',
                lineWidth: 2,
                minorTickPosition: 'outside',
                tickColor: '#933',
                minorTickColor: '#933',
                tickLength: 5,
                minorTickLength: 5,
                labels: {
                    distance: 12,
                    rotation: 'auto'
                },
                offset: -20,
                endOnTick: false
            }],

            series: [{
                name: 'Speed',
                data: [80],
                dataLabels: {
                    formatter: function () {
                        var kmh = this.y,
                            mph = Math.round(kmh * 0.621);
                        return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                            '<span style="color:#933">' + mph + ' mph</span>';
                    },
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#DDD'],
                            [1, '#FFF']
                        ]
                    }
                },
                tooltip: {
                    valueSuffix: ' km/h'
                }
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


// Load factor

function disruption_chart() {

    Highcharts.chart('bar_disruption', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },
        title: false,
        exporting: false,
        credits: false,
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
}

function delay_analysis_chart() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'delay_analysis',
            marginTop: -100,
            type: 'pie',
            backgroundColor: 'transparent',
            events: {
                load: function () {
                    var chart = this,
                        x = chart.plotLeft + (chart.series[0].center[0]),
                        y = chart.plotTop + (chart.series[0].center[1]),
                        box;

                    chart.pieCenter = chart.renderer.text('aSD<br>500 ASD.', x, y, true)
                        .css({
                            'text-align': 'center',
                            color: 'black',
                            fontSize: '16px'
                        })
                        .add();

                    box = chart.pieCenter.getBBox();
                    chart.pieCenter.attr({
                        x: x - box.width / 2,
                        y: y - box.height / 4
                    });
                },
                redraw: function () {
                    var chart = this,
                        x = chart.plotLeft + (chart.series[0].center[0]),
                        y = chart.plotTop + (chart.series[0].center[1]),
                        box = chart.pieCenter.getBBox();
                    chart.pieCenter.attr({
                        x: x - box.width / 2,
                        y: y - box.height / 4
                    });
                }
            }
        },
        title: false,
        exporting: false,
        credits: false,
        plotOptions: {
            pie: {
                innerSize: '60%'
            }
        },
        legend:false,
        series: [{
            showInLegend: true,
            size: '34%',
            data: [
                ['Firefox', 44.2],
                ['IE7', 26.6],
                ['IE6', 20],
                ['Chrome', 3.1],
                ['Other', 5.4]
            ]
        }]
    });
}

function plannedVsActual_chart() {

    Highcharts.chart('plannedVsActual', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent'    
        },
        exporting: false,
        credits: false,
        title: false,
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }]
    });


}