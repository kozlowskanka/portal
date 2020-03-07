import React from 'react';
import styles from './Event.module.scss';
import PropTypes from 'prop-types';

const Event = ({match}) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    <p> id: {match.params.id}</p>
  </div>
);

Event.propTypes = {
  match: PropTypes.node,
};

export default Event;
