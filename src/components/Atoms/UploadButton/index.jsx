import React from 'react';

// Material UI
import { Button, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const handleUploadFile = (onUpload, id) => async e => {
  const file = e.target.files[0];
  const input = {
    file,
    id
  };
  const result = await onUpload({ variables: { input } });
  console.log(result);
};
const UploadButton = props => {
  const { classes, fileTypes, title, onUpload, id, ml } = props;
  return (
    <>
      <input
        className={classes.input}
        accept={fileTypes}
        id="button-file"
        multiple
        type="file"
        onChange={handleUploadFile(onUpload, id)}
      />
      <label htmlFor="button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classNames(classes.button, ml && classes.ml)}>
          {title}
        </Button>
        texto adicional
      </label>
    </>
  );
};

export default withStyles(styles)(UploadButton);
