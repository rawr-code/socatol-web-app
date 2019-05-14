import React, { useState } from 'react';

// Material UI
import { Dialog, Button } from '@material-ui/core';

const ButtonDialogForm = props => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { form: Form, title = 'Title', style, scroll, ...formProps } = props;
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={style}>
        {title}
      </Button>
      <Dialog open={open} PaperComponent="div" maxWidth="md" scroll={scroll}>
        <Form {...formProps} handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ButtonDialogForm;
