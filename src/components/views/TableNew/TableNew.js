import React from 'react';
import styles from './TableNew.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import DateAndTimePicker from '../../features/DateAndTimePicker/DateAndTimePicker';

const TableNew = () => (
  <div className={styles.component}>
    <h2>Table: new reservation</h2>
    <List>
      <ListItem>
        <ListItemText>
          <DateAndTimePicker/>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='table' variant="filled" />
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='people' variant="filled" />
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='name' variant="filled" />
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='telephone' variant="filled" />
        </ListItemText>
      </ListItem>
    </List>
  </div>
);

export default TableNew;
