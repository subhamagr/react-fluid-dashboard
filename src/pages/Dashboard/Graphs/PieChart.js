import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GraphContainer from './GraphContainer';


class PieChart extends GraphContainer {
  render() {
    const config = this.props.config;
    const _config = {
      title: {
        text: config.title
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      series: config.series.map(s => ({
        ...s,
        data: (s.data || []).map(d => ({
          ...d,
          y: parseInt(d.value, 10)
        })),
      })),
    }
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

export default PieChart;
