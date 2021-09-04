
var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();

    // otp charts
    otp_overall_chart()
    otp_SectorType_chart()
    otp_FlightType_chart()
    otp_RegionType_chart()
    otp_metro_chart()
       
});


// OTP section Charts

function otp_overall_chart() {
    $.ajax({
        type: 'POST',
        url: applicationUrl + "OTPDashboard/OTPGet_Delay_analysis_chart",
        dataType: 'json',
        data: {
            fromDate: function () { return '' },
            toDate: function () { return '' },
            ddValue: function () { return 'Current Day' },
        },
        success: function (res) {

            console.log("delay analysis res", res)

            var delay_data = [], delay_ = [], delay_sum = 0
            $.each(res, function (i, item) {
                delay_.push(parseInt(item.DelayCount))
                delay_data.push([item.GroupCode, parseInt(item.DelayCount)])
            });

            for (var i = 0; i < delay_.length; i++) {
                delay_sum += delay_[i];
            }

            console.log("delay_data", delay_data)

            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'overalotp',
                    marginTop: -100,
                    type: 'pie',
                    backgroundColor: 'transparent',
                    events: {
                        load: function () {
                            var chart = this,
                                x = chart.plotLeft + (chart.series[0].center[0]),
                                y = chart.plotTop + (chart.series[0].center[1]),
                                box;

                            chart.pieCenter = chart.renderer.text('Delay<br>' + delay_sum, x, y, true)
                                .css({
                                    'text-align': 'center',
                                    color: 'white',
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
                legend: false,
                series: [{
                    showInLegend: true,
                    size: '34%',
                    data: delay_data
                }]
            });

        },
        error: function (ex) {
            alert('Failed to retrieve Delay Analysis data : ' + ex);
        }
    });
    //$('#overalotp').highcharts({
    //    colors: ['#33ee00', '#006622'],
    //    chart: {
    //       /* type: 'pie',*/
    //        backgroundColor: 'transparent',
    //        marginTop: -100,
    //    },
    //    title: {
    //        text: '35%',
    //        y: -40,
    //        verticalAlign: 'middle',
    //        style: {
    //            color: '#eee'
    //        },
    //    },
    //    subtitle: {
    //        text: 'Over All OTP',
    //        style: {
    //            color: '#eee'
    //        },
    //    },
    //    exporting: false,
    //    credits: false,
    //    plotOptions: {
    //        pie: {
    //            dataLabels: {
    //                enabled: false
    //            },
    //            borderWidth: 0
    //        }
    //    },
    //    series: [{
    //        type: 'pie',
    //        name: 'Browser share',
    //        size: '50%',
    //        innerSize: '75%',
    //        data: [65, 35]
    //    }]
    //});
}

function otp_metro_chart() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "OTPDashboard/OTPGet_flight_type_analysis_chart",
        dataType: 'json',
        data: {
            fromDate: function () { return '' },
            toDate: function () { return '' },
            ddValue: function () { return 'Current Day' },
        },
        success: function (data) {

            //console.log("load chart data..", data)

            var data1 = []
            //data1 = data
            $.each(data, function (i, item) {
                data1.push({ 'name': item.FlightType, 'y': parseFloat(item.Value), 'drilldown': item.FlightType })
            });

            console.log("chart data1..", data1)

            //var drilldown_count = 0;

            drilldown_val_one = '', drilldown_val_two = '', drilldown_val_three = '', drilldown_val_four = '';

            // Bar chart
            Highcharts.chart('metrochart', {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    events: {
                        drilldown: function (e) {

                            //drilldown_count = drilldown_count + 1;
                            var chart = this;
                            console.log("drill down event..", e.point.name)
                            //chart.showLoading('Loading data ...');

                            DrilldownValue = e.point.name
                            //drilldown_val_one = e.point.name
                            SelectedChangeType_glob = selectedChangeType
                            console.log("drilldown_count", drilldown_count)

                            console.log("drilldown_val_one", drilldown_val_one)
                            console.log("drilldown_val_one", drilldown_val_two)
                            console.log("drilldown_val_one", drilldown_val_three)

                            //console.log("drill down one level", DrilldownValue = e.point.name)
                            //ReLoadOnloadWiseGrid();

                        }
                    },
                },
                title: {
                    text: 'Flight Type Analysis',
                    margin: 10,
                    style: {
                        color: '#eee'
                    },
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    //    plotLines: [{
                    //        value: 15,
                    //    zIndex: 5,
                    //    width: 2,
                    //        color: '#ff0000',
                    //dashStyle: 'longdashdot'
                    //}],
                    title: {
                        text: ''
                    }

                },
                legend: {
                    enabled: false
                },

                subtitle: {
                    text: ''
                },
                accessibility: {
                    announceNewData: {
                        enabled: true
                    },
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: false,
                            format: '{point.name}: {point.y:.1f}%'
                        }
                    }
                },
                tooltip: {
                    //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}"><b>{point.y:.2f}%'
                    //pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%'
                },

                series:
                    [
                        {
                            /*name: "Browsers",*/
                            colorByPoint: true,
                            data: data1,
                            size: '34%'
                        }
                    ],
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },

            },
                function (chart) { // on complete
                    console.log("data chart", chart.series[0].data.length)
                    console.log("data1", data1.length)

                    if (data1.length < 1) { // check series is empty
                        console.log("Check point 1")
                        chart.renderer.text('No Data Available', 140, 120)
                            .css({
                                color: '#4572A7',
                                fontSize: '20px'
                            })
                            .add();
                    }


                });
        },
        complete: function () {
            console.log("in compelete...");
            $("#overlay").hide();
            $(".overlay").hide();
        },
        error: function (ex) {
            alert('Failed to retrieve Sector : ' + ex);
        }
    });
}

function otp_RegionType_chart() {
    $.ajax({
        type: 'POST',
        url: applicationUrl + "OTPDashboard/OTPGetRegion_Delay_analysis_chart",
        dataType: 'json',
        data: {
            fromDate: function () { return '' },
            toDate: function () { return '' },
            ddValue: function () { return 'Current Day' },
        },
        success: function (res) {

            console.log("delay analysis res", res)

            var delay_data = [], delay_ = [], delay_sum = 0
            $.each(res, function (i, item) {
                delay_.push(parseInt(item.DelayCount))
                delay_data.push([item.GroupCode, parseInt(item.DelayCount)])
            });

            for (var i = 0; i < delay_.length; i++) {
                delay_sum += delay_[i];
            }

            console.log("delay_data", delay_data)

            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'regionwise',
                    marginTop: -100,
                    type: 'pie',
                    backgroundColor: 'transparent',
                    events: {
                        load: function () {
                            var chart = this,
                                x = chart.plotLeft + (chart.series[0].center[0]),
                                y = chart.plotTop + (chart.series[0].center[1]),
                                box;

                            chart.pieCenter = chart.renderer.text('Delay<br>' + delay_sum, x, y, true)
                                .css({
                                    'text-align': 'center',
                                    color: 'white',
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
                legend: false,
                series: [{
                    showInLegend: true,
                    size: '34%',
                    data: delay_data
                }]
            });

        },
        error: function (ex) {
            alert('Failed to retrieve Delay Analysis data : ' + ex);
        }
    });
  
}

function otp_SectorType_chart() {
    Highcharts.chart('sectorchart', {

        chart: {
            type: 'bubble',
            backgroundColor: 'transparent',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Sector'
        },

        subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Daily fat intake'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Daily sugar intake'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
            ]
        }]

    });

}

function otp_FlightType_chart() {
    Highcharts.chart('flightchart', {

        chart: {
            type: 'bubble',
            backgroundColor: 'transparent',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Flight'
        },

        subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Daily fat intake'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Daily sugar intake'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
            ]
        }]

    });
  
}
