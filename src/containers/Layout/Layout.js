import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Styles';


class PermanentDrawer extends React.Component {
  state = { open: true };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header open={this.state.open} handleToggle={this.handleToggle} />
          <Sidebar open={this.state.open} />
          <main className={classNames(classes.content, !this.state.open && classes.fullWidthContent)}>
            {this.props.renderRoutes()}
          </main>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
