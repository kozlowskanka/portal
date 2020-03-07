import React from 'react';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';

const Table = ({match}) => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <p> id: {match.params.id}</p>
  </div>
);

Table.propTypes = {
  match: PropTypes.node,
};

export default Table;
