import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL +'/tables/booking/123'}>
          Table
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL +'/tables/booking/new'}>
          New Table
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL +'/tables/events/456'}>
          Event
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL +'/tables/events/new'}>
          New Event
        </Link>
      </li>
    </ul>
  </div>
);

export default Tables;
