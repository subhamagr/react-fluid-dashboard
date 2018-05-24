import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GraphContainer from './GraphContainer';

var config = {
  title: {
    text: 'Pie Chart'
  },
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Other',
        y: 7.05
    }]
  }],
};

class PieChart extends GraphContainer {
  render() {
    return (
      <div style={{ padding: '2%', height: '100%' }}>
        <ReactHighcharts
          ref={(r) => { this._chart = r }}
          config={config}
        />
      </div>
    );
  }
}

export default PieChart;
