import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GraphContainer from './GraphContainer';


class BarChart extends GraphContainer {
  render() {
    return (
      <div style={{ padding: '2%', height: '100%' }}>
        <ReactHighcharts
          ref={(r) => { this._chart = r }}
          config={this.props.config}
        />
      </div>
    );
  }
}

export default BarChart;
