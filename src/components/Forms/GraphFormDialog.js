import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';

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
  { label: 'Description', name: 'description', type: 'textarea' },
];

const CHART_TYPES = [
  { label: 'Pie', value: 'pie' },
  { label: 'Line', value: 'line' },
];

class GraphFormDialog extends React.Component {
  handleSave = (values) => {
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
          transition={Transition}
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

                  {values.chartType !== 'pie' &&
                    <Grid item xs={12} sm={12}>
                      <Field
                        component={TextField}
                        name="xAxisCategories"
                        type="text"
                        label="X-Axis Categories"
                      />
                    </Grid>
                  }
                  
                  {values.chartType &&
                    <Grid item xs={12} sm={12}>
                      <Button type="button" color="inherit" onClick={() => push('series', {})}>
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