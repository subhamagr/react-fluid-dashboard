import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Page } from '../../components/CommonStyles';

const App = ({ classes = {} }) => (
  <Page>
    <div className={classes.toolbar} />
    <Typography>{'You think water moves fast? You should see ice.'}</Typography>
  </Page>
);

export default App;
