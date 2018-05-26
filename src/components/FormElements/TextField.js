import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { TextFieldTheme } from './Styles';

const Field = ({ classes, input, meta, label, type, placeholder, disabled, pattern, required, autoFocus, ...props }) => (
  <TextField
    fullWidth
    error={meta && meta.error && meta.touched}
    required={required}
    autoFocus={autoFocus}
    helperText={meta && meta.error && meta.touched ? meta.error : ''}
    {...input}
    label={label}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    pattern={pattern}
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.textFieldRoot,
        input: `${classes.inputField} ${type === 'textarea' ? classes.textAreaFieldInput : ''}`,
      },
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.formLabel,
    }}
    FormHelperTextProps={{
      className: classes.formLabel
    }}
    multiline={type === 'textarea'}
    rowsMax={props.rowsMax}
  />
);

export default withStyles(TextFieldTheme)(Field);
