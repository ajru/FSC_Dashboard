
var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();


    bar_FlightTypeWiseDelay();
    bar_DelayWiseFlightCount();
    bar_FlightWiseDelay();
    bar_FlightTypeWiseDiverted();
    bar_DivertedFlightDetails();
    bar_FlightTypeWiseCancelled();
    bar_CancellationFlightDetails();
});


function bar_FlightTypeWiseDelay() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Flight_Type_Wise_Delay_chart",
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
            Highcharts.chart('bar_FlightTypeWiseDelay', {
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

function bar_DelayWiseFlightCount() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Delay_Wise_Flight_Count_chart",
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
            Highcharts.chart('bar_DelayWiseFlightCount', {
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

function bar_FlightWiseDelay() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Flight_Wise_Delay_chart",
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
            Highcharts.chart('bar_FlightWiseDelay', {
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

function bar_FlightTypeWiseDiverted() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Flight_Type_Wise_Diverted_chart",
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
            Highcharts.chart('bar_FlightTypeWiseDiverted', {
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

function bar_DivertedFlightDetails() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Diverted_Flight_Details_chart",
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
            Highcharts.chart('bar_DivertedFlightDetails', {
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

function bar_FlightTypeWiseCancelled() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Flight_Type_Wise_Cancelled_chart",
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
            Highcharts.chart('bar_FlightTypeWiseCancelled', {
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

function bar_CancellationFlightDetails() {

    //$(".overlay").show();
    $.ajax({
        type: 'POST',
        url: applicationUrl + "DisruptionDashboard/Get_Cancellation_Flight_Details_chart",
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
            Highcharts.chart('bar_CancellationFlightDetails', {
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

