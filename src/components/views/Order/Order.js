import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = ({match}) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    <p> id: {match.params.id}</p>
  </div>
);

Order.propTypes = {
  match: PropTypes.node,
};

export default Order;
