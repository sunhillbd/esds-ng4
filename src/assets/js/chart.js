$(document).ready(function() {
Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Staff Email Violations'
    },

    xAxis: {
        categories: ['External', 'Large Attachments', 'Personal Emails', 'Suspicious Language(External)', 'Suspicious Language(Internal)',
            'External BCC', 'Forwarded Emails', 'Total']
    },

    yAxis: {
        categories: ['Bangalore', 'Delhi', 'Mumbai'],
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [
            [0, 0, 0], [0, 1, 0], [0, 2, 10],
            [1, 0, 0], [1, 1, 6], [1, 2, 1],
            [2, 0, 0], [2, 1, 0], [2, 2, 1],
            [3, 0, 0], [3, 1, 0], [3, 2, 2],
            [4, 0, 1], [4, 1, 5], [4, 2, 2],
            [5, 0, 1], [5, 1, 0], [5, 2, 3],
            [6, 0, 0], [6, 1, 0], [6, 2, 3],
            [7, 0, 2], [7, 1, 11], [7, 2, 22],],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }]

});
});