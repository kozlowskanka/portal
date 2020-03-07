import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL +'/waiter/order/new'}>
          New Order
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL +'/waiter/order/789'}>
          Order
        </Link>
      </li>
    </ul>
  </div>
);

export default Waiter;
