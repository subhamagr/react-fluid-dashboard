import React from 'react';
import { Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TextField from '../FormElements/TextField';

import { FormDialogStyles } from '../CommonStyles';


const PieChartDataArray = ({ fields, classes }) => {
  return (
    <Grid item xs={12} sm={12}>
      {fields.map((option, index) => {
        return (
          <Grid
            container
            spacing={24}
            alignItems="center"
            className={classes.fieldArrayItem}
            key={option}
          >
            <Grid item xs={12} sm={2}>
              <Field
                required
                name={`${option}.name`}
                component={TextField}
                label="Data Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Field
                required
                name={`${option}.value`}
                component={TextField}
                label="Data Value"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <Field
                name={`${option}.sliced`}
                component="input"
                type="checkbox"
              />
              Sliced
            </Grid>

            <Grid item xs={12} sm={2}>
              <Field
                name={`${option}.selected`}
                component="input"
                type="checkbox"
              />
              Selected
            </Grid>

            {fields.length > 1 && 
              <Grid item xs={12} sm={2}>
                <Button type="button" onClick={() => fields.remove(index)} className={`${classes.removeButton} ${classes.danger}`}>
                  Remove
                </Button>
              </Grid>
            }
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(FormDialogStyles)(PieChartDataArray);