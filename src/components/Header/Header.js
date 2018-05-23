import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles, { Brand } from './HeaderStyles';


const Header = ({ classes, open, handleToggle, }) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, classes[`appBar-left`], !open && classes.fullWidthAppBar)}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleToggle}
        className={classNames(classes.menuButton)}
      >
        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      <Brand>
        <Typography variant="title" color="inherit" noWrap>
          Dashboard
        </Typography>
      </Brand>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);

