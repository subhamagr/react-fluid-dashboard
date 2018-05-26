export default {
  pie: {
    title: 'Pie Chart',
    chartType: 'pie',
    height: 9,
    width: 10,
    x: 0,
    y: -1,
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'A',
        value: 100,
        sliced: true,
        selected: true
      }]
    }],
  },
  bar: {
    chartType: 'bar',
    title: 'Bar Chart',
    height: 9,
    width: 10,
    x: 0,
    y: -1,
    xAxisCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].join(','),
    crosshair: true,
    tooltipShared: true,
    series: [{
      name: 'Tokyo',
      data: '49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4'
    }],
  },
  line: {
    chartType: 'line',
    title: 'Line Chart',
    height: 9,
    width: 10,
    x: 0,
    y: 0,
    xAxisCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].join(','),
    series: [{
      name: 'Line 1',
      data: '29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4',
    }]
  }
}