export const TextFieldTheme = theme => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    '& > div': {
      height: 'auto !important'
    }
  },
  full: {
    width: '100% !important'
  },
  selectFieldRoot: {
    padding: 0,
    '& svg': {
      right: 7
    },
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 7px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textAreaFieldInput: {
    height: '4em',
  },
  formLabel: {
    fontSize: 18,
  },
})