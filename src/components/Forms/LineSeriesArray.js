import React from 'react';
import { Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TextField from '../FormElements/TextField';

import { FormDialogStyles } from '../CommonStyles';

const LineSeriesArray = ({ fields, classes, change, ...props }) => {
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
            <Grid item xs={12} sm={5}>
              <Field
                required
                name={`${option}.data`}
                component={TextField}
                label="Series Data"
                type="text"
              />
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

export default withStyles(FormDialogStyles)(LineSeriesArray);