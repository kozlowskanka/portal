import React from 'react';
import styles from './Event.module.scss';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import DateAndTimePicker from '../../features/DateAndTimePicker/DateAndTimePicker';

const demoData = {
  table: '6',
  people: '10',
  date: '2020-03-08',
  time: '16:15',
  name: 'John',
  telephone: '666-666-666',
};

const Event = ({match}) => (
  <div className={styles.component}>
    <h2>Event reservation: {match.params.id} </h2>
    <List>
      <ListItem>
        <ListItemText>
          <DateAndTimePicker date={demoData.date} time={demoData.time}/>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='table' variant="filled" defaultValue={demoData.table}/>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='people' variant="filled" defaultValue={demoData.people}/>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='name' variant="filled" defaultValue={demoData.name}/>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <TextField className={styles.item} id="standard-basic" label='telephone' variant="filled" defaultValue={demoData.telephone}/>
        </ListItemText>
      </ListItem>
    </List>
  </div>
);

Event.propTypes = {
  match: PropTypes.node,
};

export default Event;
