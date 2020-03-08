import React from 'react';
import styles from './Kitchen.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', table: '2', menu: ['pizza', 'salad', 'soda'], note: 'no olives'},
  {id: '2', table: '5', menu: ['pizza', 'salad', 'spaghetti'], note: ''},
  {id: '3', table: '3', menu: ['pizza'], note: ''},
  {id: '4', table: '2', menu: ['salad', 'tea'], note: 'no sugar'},
  {id: '5', table: '1', menu: ['pizza', 'salad', 'soda', 'spaghetti'], note: ''},
  {id: '6', table: '4', menu: ['pizza'], note: ''},
];

const getOrdered = (menu) => {

  let ordered = [];
  for (let item of menu) {
    ordered.push(<p>{item}</p>);
  }
  return ordered;
};

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Menu</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.time}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {getOrdered(row.menu)}
              </TableCell>
              <TableCell>
                {row.note}
              </TableCell>
              <TableCell>
                <Checkbox
                  color="primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;
