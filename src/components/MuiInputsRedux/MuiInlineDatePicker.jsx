import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import MomentUtils from '@date-io/moment';

import { InlineDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';

const MuiInlineDatePicker = props => {
  const {
    input,
    meta: { touched, invalid, error }
  } = props;
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
      <InlineDatePicker
        {...props}
        {...input}
        format="DD/MM/YYYY"
        // value={value}
        // onChange={onChange}
        error={touched && invalid}
        helperText={touched && error}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MuiInlineDatePicker;
