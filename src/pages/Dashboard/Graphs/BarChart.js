import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GraphContainer from './GraphContainer';


class BarChart extends GraphContainer {
  render() {
    const config = this.props.config;
    const _config = {
      title: {
        text: config.title
      },
      chart: {
        type: 'column'
      },
      xAxis: {
        categories: config.xAxisCategories ? config.xAxisCategories.split(',') : [],
        crosshair: config.crosshair
      },
      tooltip: {
        shared: config.tooltipShared,
      },
      series: config.series.map(s => ({
        ...s,
        data: s.data.split(', ').map(d => parseInt(d, 10)),
      })),
    };
    return (
      <div style={{ padding: '2%', height: '100%' }}>
        {this.renderToolbar()}
        <ReactHighcharts
          ref={(r) => { this._chart = r }}
          config={_config}
        />
      </div>
    );
  }
}

export default BarChart;
