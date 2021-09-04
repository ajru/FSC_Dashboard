
var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();

    AUAircraft_Utilization_chart();
    AUFleetWiseBifurcation_chart();
    AUAircraftTailNoWise_chart();

       
});


function AUFleetWiseBifurcation_chart() {

    
    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "AircraftUtilizationDashboard/AUGet_FleetWiseBifurcation_chart",
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

            //console.log("chart data1..", data1)

            //var drilldown_count = 0;

            drilldown_val_one = '', drilldown_val_two = '', drilldown_val_three = '', drilldown_val_four = '';

            // Bar chart
            Highcharts.chart('Fleet_wise_bifurcation', {
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
                            data: data1
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
                    //console.log("data chart", chart.series[0].data.length)
                    //console.log("data1", data1.length)

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
            //console.log("in compelete...");
            $("#overlay").hide();
            $(".overlay").hide();
        },
        error: function (ex) {
            alert('Failed to retrieve Sector : ' + ex);
        }
    });
}

function AUAircraftTailNoWise_chart() {


    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "AircraftUtilizationDashboard/AUGet_AircraftTailNoWise_chart",
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

            //console.log("chart data1..", data1)

            //var drilldown_count = 0;

            drilldown_val_one = '', drilldown_val_two = '', drilldown_val_three = '', drilldown_val_four = '';

            // Bar chart
            Highcharts.chart('Aircraft_Tail_no_wise', {
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
                            data: data1
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
                    //console.log("data chart", chart.series[0].data.length)
                    //console.log("data1", data1.length)

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
            //console.log("in compelete...");
            $("#overlay").hide();
            $(".overlay").hide();
        },
        error: function (ex) {
            alert('Failed to retrieve Sector : ' + ex);
        }
    });
}

function AUAircraft_Utilization_chart() {
    $.ajax({
        type: 'POST',
        url: applicationUrl + "AircraftUtilizationDashboard/AUGet_Aircraft_Utilization_chart",
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
                    renderTo: 'aircraft_utilization',
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

