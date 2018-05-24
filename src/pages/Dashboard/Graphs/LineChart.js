import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GraphContainer from './GraphContainer';

var config = {
  title: {
    text: 'Line Chart'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

class LineChart extends GraphContainer {
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

export default LineChart;
