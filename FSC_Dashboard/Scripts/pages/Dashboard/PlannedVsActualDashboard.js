
var applicationUrl;

$(document).ready(function (event) {
    applicationUrl = $("#applicationPath").val();

    plannedVsActual_chart()
    daywiseblockhours_chart()
    
});

function plannedVsActual_chart() {

    $.ajax({
        type: 'POST',
        url: applicationUrl + "PlannedVsActualDashboard/PVAGet_PannedVsActual_chart",
        dataType: 'json',
        data: {
            fromDate: function () { return '' },
            toDate: function () { return '' },
            ddValue: function () { return 'Previous Month' },
        },
        success: function (res) {

            //console.log("delay analysis res", res)

            var planned = [], actual = [], categories = [],planned_sum = 0,actual_sum = 0, chart_data = []

            chart_data.push({ name: 'Planned', y: 0 })
            var count_v = 0
            $.each(res, function (i, item) {

                if (count_v < 10) {
                    chart_data.push({ name: item.FlightDate.toString(), y: Math.floor(parseInt(item.PlannedFlightTime) / 60) })
                    chart_data.push({ name: item.FlightDate.toString(), y: Math.floor(parseInt(item.ActualFlightTime) / 60) })

                    planned.push(-Math.floor(parseInt(item.PlannedFlightTime) / 60))
                    actual.push(Math.floor(parseInt(item.ActualFlightTime) / 60))
                    categories.push([item.FlightDate.toString()])
                }
                count_v++;
               
            });

            for (var i = 0; i < planned.length; i++) {
                planned_sum += planned[i];
            }

            for (var i = 0; i < actual.length; i++) {
                actual_sum += actual[i];
            }

            chart_data[0].y = planned_sum;
            chart_data.push({ name: 'Actual', y: actual_sum })

            console.log("planned_sum", planned_sum)
            console.log("actual_sum", actual_sum)
            console.log("chart_data", chart_data)

            //chart_data.slice(0)

            Highcharts.chart('plannedVsActual', {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent'
                },
                exporting: false,
                credits: false,
                title: {
                    text: 'Planned Vs Actual Block Hours Dashboard',
                    margin: 10,
                    style: {
                        color: '#eee'
                    },
                },
                xAxis: {
                    categories: categories
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Planned',
                    data: planned
                }, {
                    name: 'Actual',
                    data: actual
                }
                ]
            });


        },
        error: function (ex) {
            alert('Failed to retrieve Delay Analysis data : ' + ex);
        }
    });
}

function daywiseblockhours_chart() {

    $.ajax({
        type: 'POST',
        url: applicationUrl + "PlannedVsActualDashboard/PVAGet_DayWiseBlockHours_chart",
        dataType: 'json',
        data: {
            fromDate: function () { return '' },
            toDate: function () { return '' },
            ddValue: function () { return 'Previous Month' },
        },
        success: function (res) {

            //console.log("delay analysis res", res)

            var planned = [], actual = [], categories = [], planned_sum = 0, actual_sum = 0, chart_data = []

            chart_data.push({ name: 'Planned', y: 0 })
            var count_v = 0
            $.each(res, function (i, item) {

                if (count_v < 10) {
                    chart_data.push({ name: item.FlightDate.toString(), y: Math.floor(parseInt(item.PlannedFlightTime) / 60) })
                    chart_data.push({ name: item.FlightDate.toString(), y: Math.floor(parseInt(item.ActualFlightTime) / 60) })

                    planned.push(-Math.floor(parseInt(item.PlannedFlightTime) / 60))
                    actual.push(Math.floor(parseInt(item.ActualFlightTime) / 60))
                    categories.push([item.FlightDate.toString()])
                }
                count_v++;

            });

            for (var i = 0; i < planned.length; i++) {
                planned_sum += planned[i];
            }

            for (var i = 0; i < actual.length; i++) {
                actual_sum += actual[i];
            }

            chart_data[0].y = planned_sum;
            chart_data.push({ name: 'Actual', y: actual_sum })

            console.log("planned_sum", planned_sum)
            console.log("actual_sum", actual_sum)
            console.log("chart_data", chart_data)

            //chart_data.slice(0)

            Highcharts.chart('daywiseblockhours', {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent'
                },
                exporting: false,
                credits: false,
                title: {
                    text: 'Day Wise Block Hours',
                    margin: 10,
                    style: {
                        color: '#eee'
                    },
                },
                xAxis: {
                    categories: categories
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Planned',
                    data: planned
                }, {
                    name: 'Actual',
                    data: actual
                }
                ]
            });

        },
        error: function (ex) {
            alert('Failed to retrieve Delay Analysis data : ' + ex);
        }
    });

}