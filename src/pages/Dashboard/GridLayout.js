import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import map from 'lodash/map';
import random from 'lodash/random';
import range from 'lodash/range';

import { Responsive, WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { GridStyles } from './DashboardStyles';
import HighStock from './Graphs/HighStock';
import LineChart from './Graphs/LineChart';
import PieChart from './Graphs/PieChart';
import BarChart from './Graphs/BarChart';
import AreaChart from './Graphs/AreaChart';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const charts = ['Stock', 'Line', 'Pie', 'Bar', 'Area'];
function generateLayout() {
  var y = Math.ceil(Math.random(1) * 4) + 1;
  return [{
    x: 0,
    y: 0,
    w: 12,
    h: 9,
    i: charts[0],
  }, {
    x: 0,
    y: 1,
    w: 6,
    h: 9,
    i: charts[1],
  }, {
    x: 6,
    y: 1,
    w: 4,
    h: 9,
    i: charts[2],
  }, {
    x: 0,
    y: 2,
    w: 12,
    h: 11,
    i: charts[3],
  }, {
    x: 0,
    y: 3,
    w: 12,
    h: 13,
    i: charts[4],
  }];
}


class ShowcaseLayout extends React.Component {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout()
  };

  state = {
    currentBreakpoint: 'lg',
    compactType: 'vertical',
    mounted: false,
    layouts: { lg: this.props.initialLayout }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM = () => {
    const { classes } = this.props;
    return map(this.state.layouts[this.state.currentBreakpoint] || this.state.layouts.lg, (l, i) => {
      return (
        <div key={i} className={classes.gridItem} data-grid={l}>
          {i === 0 && 
            <HighStock height={l.h * this.props.rowHeight} width={l.w} />
          }
          {i === 1 && 
            <LineChart height={l.h * this.props.rowHeight} width={l.w} />
          }
          {i === 2 && 
            <PieChart height={l.h * this.props.rowHeight} width={l.w} />
          }
          {i === 3 && 
            <BarChart height={l.h * this.props.rowHeight} width={l.w} />
          }
          {i === 4 && 
            <AreaChart height={l.h * this.props.rowHeight} width={l.w} />
          }
        </div>
      );
    });
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onLayoutChange = (layout, layouts) => this.setState({ layouts });

  render() {
    console.log(this.state.layouts);
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          isDraggable={false}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default withStyles(GridStyles)(ShowcaseLayout);
