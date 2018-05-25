import React from 'react';
import isEqual from 'lodash/isEqual';
import { Button, Toolbar, Typography } from '@material-ui/core';


class GraphContainer extends React.Component {
  componentDidMount() {
    this._chart.chart.container.parentElement.style.height = `${this.props.height - 64}px`;
    this._chart.chart.reflow();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.height !== nextProps.height || this.props.width !== nextProps.width || !isEqual(this.props.config, nextProps.config)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.height !== nextProps.height) {
      this._chart.chart.container.parentElement.style.height = `${nextProps.height - 64}px`;
      this._chart.chart.reflow();
    }
  }

  renderToolbar() {
    return (
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Dashboard
        </Typography>
        <Button color="primary" variant="raised" onClick={this.props.onEdit}>Edit</Button>
      </Toolbar>
    );
  }

  render() {
    return <span />
  }
}

export default GraphContainer;
