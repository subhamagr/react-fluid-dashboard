import React from 'react';

import GridLayout from './GridLayout';
import { Page } from '../../components/CommonStyles';


const App = ({ classes = {} }) => (
  <Page>
    <div className={classes.toolbar} />
    <GridLayout />
  </Page>
);

export default App;
