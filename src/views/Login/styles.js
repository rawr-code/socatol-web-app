const styles = theme => ({
  root: {
    display: 'flex'
  },
  textContent: {
    flexGrow: 1
  },
  formRoot: {
    height: '100vh',
    width: 400,
    padding: '128px 48px 24px'
  },
  formTitle: {
    marginBottom: 32
  },
  textField: {
    margin: 0,
    marginBottom: 16
  },
  formOptions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checkboxContainer: {
    marginLeft: -14
  },
  checkbox: {
    width: 48,
    height: 48
  },
  button: {
    marginTop: 16
  }
});

export default styles;
