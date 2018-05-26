import React from 'react';
import { Field } from 'react-final-form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { FieldArray } from 'react-final-form-arrays'

import TextField from '../FormElements/TextField';

import PieChartDataArray from './PieChartDataArray';
import { FormDialogStyles } from '../CommonStyles';

const PieChartSeriesArray = ({ fields, classes, push, change, ...props }) => {
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
            <Grid item xs={12} sm={3}>
              <Field
                required
                name={`${option}.name`}
                component={TextField}
                label="Series Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                name={`${option}.colorByPoint`}
                component="input"
                type="checkbox"
              />
              Color By Point
            </Grid>

            <Grid item xs={12} sm={2}>
              <Button type="button" color="primary" onClick={() => push(`${option}.data`, index)}>
                Add Data
              </Button>
            </Grid>

            {fields.length > 1 && 
              <Grid item xs={12} sm={2}>
                <Button type="button" onClick={() => fields.remove(index)} className={`${classes.removeButton} ${classes.danger}`}>
                  Remove
                </Button>
              </Grid>
            }
            <FieldArray name={`${option}.data`} component={PieChartDataArray} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(FormDialogStyles)(PieChartSeriesArray);