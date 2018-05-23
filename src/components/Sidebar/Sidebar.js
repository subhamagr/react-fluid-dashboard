import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { mailFolderListItems, otherMailFolderListItems } from './items';

import styles from './SidebarStyles';

const Sidebar = ({ classes, open, }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
    }}
    anchor='left'
  >
    <div className={classes.toolbar}>
      
    </div>
    <Divider />
    <List>{mailFolderListItems}</List>
    <Divider />
    <List>{otherMailFolderListItems}</List>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
