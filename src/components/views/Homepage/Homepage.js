import React from 'react';
import styles from './Homepage.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const statistics = [
  {id: '1', status: 'closed', location: 'restaurant'},
  {id: '2', status: 'closed', location: 'restaurant'},
  {id: '3', status: 'closed', location: 'delivery'},
  {id: '4', status: 'in progress', location: 'restaurant'},
  {id: '5', status: 'in progress', location: 'delivery'},
  {id: '6', status: 'in progress', location: 'delivery'},
];

const schedule = [
  {id: '1', type: 'event', time: '12:15', table: '2', people: '15'},
  {id: '2', type: 'table', time: '14:15', table: '5', people: '2'},
  {id: '3', type: 'table', time: '16:15', table: '10', people: '4'},
  {id: '4', type: 'event', time: '18:15', table: '6', people: '10'},
  {id: '5', type: 'table', time: '20:15', table: '1', people: '2'},
  {id: '6', type: 'event', time: '21:15', table: '3', people: '12'},
];

const Homepage = () => (
  <div className={styles.component}>
    <h2>Statistics</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.location}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h2>Planned</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>List</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;
