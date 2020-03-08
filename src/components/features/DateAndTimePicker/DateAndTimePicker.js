import React from 'react';
import styles from './DateAndTimePicker.module.scss';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const DateAndTimePicker = ({date, time}) => (
  <form className={styles.picker} noValidate>
    <TextField
      id="date"
      label="date"
      type="date"
      defaultValue={date}
      InputLabelProps={{
        shrink: true,
      }}
    />
    <TextField
      id="time"
      label="time"
      type="time"
      defaultValue={time}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 300, // 5 min
      }}
    />
  </form>
);

DateAndTimePicker.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
};

export default DateAndTimePicker;
