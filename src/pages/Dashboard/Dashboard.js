import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GridLayout from './GridLayout';
import { Page } from '../../components/CommonStyles';


const App = ({ classes = {} }) => (
  <Page>
    <div className={classes.toolbar} />
    <Typography>{'You think water moves fast? You should see ice.'}</Typography>
    <GridLayout />
  </Page>
);

export default App;
