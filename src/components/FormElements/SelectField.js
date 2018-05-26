import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import { TextFieldTheme } from './Styles';

const Field = ({ classes, options = [], input, meta, label, type, placeholder, disabled, required, handleChange }) => (
  <TextField
    fullWidth
    select
    {...input}
    onChange={handleChange ? handleChange : input.onChange}
    error={meta && meta.error && meta.touched}
    required={required}
    helperText={meta && meta.error && meta.touched ? meta.error : ''}
    label={label}
    placeholder={placeholder}
    disabled={disabled}
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.selectFieldRoot,
        input: classes.inputField,
      },
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.formLabel,
    }}
    FormHelperTextProps={{
      className: classes.formLabel
    }}
    SelectProps={{
      MenuProps: {
        className: classes.menu,
      },
    }}
  >
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}

  </TextField>
);

export default withStyles(TextFieldTheme)(Field);
