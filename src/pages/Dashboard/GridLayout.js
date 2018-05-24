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

const ResponsiveReactGridLayout = WidthProvider(Responsive);


function generateLayout() {
  return map(range(0, 3), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: i * 2 + 2,
      h: 10,
      i: i.toString(),
    };
  });
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
          <HighStock height={l.h * this.props.rowHeight} />
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
