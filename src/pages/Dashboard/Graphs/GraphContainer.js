import React from 'react';
import ReactHighcharts from 'react-highcharts';


class GraphContainer extends React.Component {
  componentDidMount() {
    this._chart.chart.container.parentElement.style.height = `${this.props.height}px`;
    this._chart.chart.reflow();
  }
  shouldComponentUpdate(nextProps) {
    return this.props.height !== nextProps.height || this.props.width !== nextProps.width
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.height !== nextProps.height) {
      this._chart.chart.container.parentElement.style.height = `${nextProps.height}px`;
      this._chart.chart.reflow();
    }
  }
  render() {
    return <span />
  }
}

export default GraphContainer;
