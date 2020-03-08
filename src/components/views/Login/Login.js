import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <TextField className={styles.item} id="standard-basic" label="name" variant="filled" />
    <TextField className={styles.item}id="standard-basic" label="password" variant="filled" />
    <Button className={styles.item} component={Link} to={process.env.PUBLIC_URL + '/'} variant="contained" color="primary">Login</Button>
  </div>
);

export default Login;
