import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import DateAndTimePicker from '../../features/DateAndTimePicker/DateAndTimePicker';

const schedule = [
  {time: '12:00', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'reservation', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '12:30', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'reservation', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '13:00', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '13:30', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '14:00', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: '', name5: ''},
  {time: '14:30', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: '', name5: ''},
  {time: '15:00', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '15:30', table1: '', name1: '', table2: '', name2:'', table3: 'reservation', name3: '', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '16:00', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'reservation', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '16:30', table1: '', name1: '', table2: '', name2:'', table3: 'reservation', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '17:00', table1: '', name1: '', table2: '', name2:'', table3: 'event', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '17:30', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'event', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '18:00', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'event', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '18:30', table1: 'reservation', name1: 'Mike', table2: '', name2:'', table3: 'event', name3: 'Sara', table4: '', name4: '', table5: 'event', name5: 'John'},
  {time: '19:00', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: '', name5: ''},
  {time: '19:30', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: '', name5: ''},
  {time: '20:00', table1: '', name1: '', table2: '', name2:'', table3: '', name3: '', table4: '', name4: '', table5: '', name5: ''},
];

const renderActions = (table, name) => {
  switch (table) {
    case 'reservation':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/' + name}>Table</Button>
      );
    case 'event':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/events/' + name}>Event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <h2>Book</h2>
    <div className={styles.select}>
      <DateAndTimePicker/>
      <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/new'}>New Table</Button>
      <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/events/new'}>New Event</Button>
    </div>
    <h2>Reservations</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map(row => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.table1, row.name1)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2, row.name2)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3, row.name3)}
              </TableCell>
              <TableCell>
                {renderActions(row.table4, row.name4)}
              </TableCell>
              <TableCell>
                {renderActions(row.table5, row.name5)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
