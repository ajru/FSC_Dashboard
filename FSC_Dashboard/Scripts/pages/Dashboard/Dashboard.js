var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();


    flight_section_DomasticDepart_chart();
    flight_section_InternationDepart_chart();
    flight_type_analysis_chart();
});



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