import React from 'react';
import styles from './DateAndTimePicker.module.scss';
import TextField from '@material-ui/core/TextField';


const DateAndTimePicker = () => (
  <form className={styles.picker} noValidate>
    <TextField
      id="date"
      label="date"
      type="date"
      defaultValue="2017-05-24"
      InputLabelProps={{
        shrink: true,
      }}
    />
    <TextField
      id="time"
      label="time"
      type="time"
      defaultValue="07:30"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 300, // 5 min
      }}
    />
  </form>
);

export default DateAndTimePicker;
