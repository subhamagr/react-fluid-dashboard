import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import map from 'lodash/map';
import range from 'lodash/range';
import isEqual from 'lodash/isEqual';

import { Responsive, WidthProvider } from 'react-grid-layout';
import { Toolbar, Button } from '@material-ui/core';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import LineChart from './Graphs/LineChart';
import PieChart from './Graphs/PieChart';
import BarChart from './Graphs/BarChart';

import { handleShowGraphFormDialog, handleAddGraph, initGraphs, handleUpdateGraph } from '../../store/actions/graphActions';

import { GridStyles } from './DashboardStyles';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class GridLayout extends React.Component {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: []
  };

  state = {
    currentBreakpoint: 'lg',
    compactType: 'vertical',
    mounted: false,
    layouts: { lg: this.props.initialLayout }
  };

  componentWillMount() {
    this.props.initGraphs();
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.graphs.length, nextProps.graphs.length)) {
      const newState = this.state.layouts[this.state.currentBreakpoint];
      range(0, nextProps.graphs.length - this.props.graphs.length).forEach((p) => newState.push({
        y: Infinity,
        x: 0,
        h: 9,
        w: 7
      }));
      this.setState({
        layouts: {
          ...this.state.layouts,
          [this.state.currentBreakpoint]: newState
        }
      })
    }
  }

  generateDOM = () => {
    const { classes } = this.props;
    return map(this.state.layouts[this.state.currentBreakpoint] || this.state.layouts.lg, (l, i) => {
      const config = { ...this.props.graphs[i], index: i };
      const props = {
        height: l.h * this.props.rowHeight,
        width: l.w,
        config: config,
        onEdit: () => this.props.handleShowGraphFormDialog(true, config, this.props.handleUpdateGraph)
      };
      return (
        <div key={i} className={classes.gridItem} data-grid={l}>
          {isEqual(config.chartType, 'line') && 
            <LineChart {...props} />
          }
          {isEqual(config.chartType, 'pie') && 
            <PieChart {...props} />
          }
          {isEqual(config.chartType, 'bar') && 
            <BarChart {...props} />
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
    return (
      <div>
        <Toolbar>
          <Button
            color="primary"
            variant="raised"
            onClick={() => this.props.handleShowGraphFormDialog(true, null, this.props.handleAddGraph)}
          >
            Create a new Graph
          </Button>
        </Toolbar>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          isDraggable={true}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  graphs: state.graphs.graphs
});

export default connect(mapStateToProps, { handleShowGraphFormDialog, handleAddGraph, initGraphs, handleUpdateGraph })(
  withStyles(GridStyles)(GridLayout)
);
