const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: 64,
    marginLeft: 240,
    overflow: 'scroll',
    maxHeight: 'calc(100vh - 120px)'
  },
  fullWidthContent: {
    marginLeft: 74,
  }
});


export default styles;