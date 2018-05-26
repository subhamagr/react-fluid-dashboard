import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import range from 'lodash/range';

import arrayMutators from 'final-form-arrays';
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Slide from 'material-ui/transitions/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { handleShowGraphFormDialog } from '../../store/actions/graphActions';
import CHART_INITIAL_VALUES from '../../store/chartInitialValues';

import TextField from '../FormElements/TextField';
import SelectField from '../FormElements/SelectField';
import PieChartSeriesArray from './PieChartSeriesArray';
import LineSeriesArray from './LineSeriesArray';

import { FormDialogStyles } from '../CommonStyles';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


const COMMON_INFO_OPTIONS = [
  { label: 'Title', name: 'title', type: 'text', required: true },
];

const CHART_TYPES = [
  { label: 'Pie', value: 'pie' },
  { label: 'Line', value: 'line' },
  { label: 'Bar', value: 'bar' },
];

class GraphFormDialog extends React.Component {
  handleSave = (values) => {
    if (!values.chartType) return;
    this.props.onSave(values);
    this.props.onClose();
  }

  render() {
    const { classes, onClose, show } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={show}
          onClose={onClose}
          TransitionComponent={Transition}
          classes={{ paper: classes.dialogContainer }}
        >
          <Form
            onSubmit={this.handleSave}
            mutators={{ ...arrayMutators }}
            initialValues={this.props.editing}
            render={({ handleSubmit, pristine, values, form: { change, initialize, mutators: { push, pop } } }) => (
              <form onSubmit={handleSubmit}>
                <AppBar>
                  <Toolbar>
                    <IconButton color="inherit" onClick={onClose} aria-label="Close">
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                      {this.props.editing ? 'Update' : 'Add'} Graph
                    </Typography>
                    <Button type="submit" color="inherit">save</Button>
                  </Toolbar>
                </AppBar>
                <Grid container spacing={24} alignItems="center" className={classes.gridContainer}>
                  <Grid item xs={12} sm={12}>
                    <Field
                      required
                      disabled={!!this.props.editing}
                      name="chartType"
                      component={SelectField}
                      options={CHART_TYPES}
                      label="Chart Type"
                      handleChange={(e) => {
                        initialize(CHART_INITIAL_VALUES[e.target.value])
                      }}
                    />
                  </Grid>
                  {values.chartType && COMMON_INFO_OPTIONS.map((field, index) => (
                    <Grid item xs={12} sm={12} key={index}>
                      <Field
                        required={field.required}
                        component={TextField}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                      />
                    </Grid>
                  ))}

                  {values.chartType && values.chartType !== 'pie' &&
                    <Grid item xs={12} sm={12}>
                      <Field
                        component={TextField}
                        name="xAxisCategories"
                        type="text"
                        label="X-Axis Categories"
                      />
                    </Grid>
                  }

                  {values.chartType === 'bar' &&
                    <Grid item xs={12} sm={12}>
                      <Field
                        component="input"
                        name="crosshair"
                        type="checkbox"
                        />
                      Cross Hair
                    </Grid>
                  }
                  {values.chartType === 'bar' &&
                    <Grid item xs={12} sm={12}>
                      <Field
                        component="input"
                        name="tooltipShared"
                        type="checkbox"
                      />
                      Tooltip Shared
                    </Grid>
                  }
                  
                  {(values.chartType && values.chartType !== 'pie') &&
                    <Grid item xs={12} sm={12}>
                      <Button type="button" color="primary" variant="raised" onClick={() => push('series', {})}>
                        Add Series
                      </Button>
                    </Grid>
                  }
                  <FieldArray
                    name="series"
                    component={values.chartType === 'pie' ? PieChartSeriesArray : LineSeriesArray}
                    push={push}
                    change={change}
                  />

                  {values.chartType &&
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        component={TextField}
                        name="height"
                        label="Height (1 unit = 30px)"
                        type="number"
                        inputProps={{ min: '4' }}
                      />
                    </Grid>
                  }

                  {values.chartType &&
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        component={SelectField}
                        name="width"
                        label="Width (in columns)"
                        options={range(1, 11).map(i => ({ label: i, value: i }))}
                      />
                    </Grid>
                  }
                </Grid>
              </form>
            )}
          />

        </Dialog>
      </div>
    );
  }
}

GraphFormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state.graphs.formState,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onClose: () => dispatch(handleShowGraphFormDialog(false)),
}, dispatch)

export default withStyles(FormDialogStyles)(
  connect(mapStateToProps, mapDispatchToProps)(GraphFormDialog)
);