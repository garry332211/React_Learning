import React,{useContext} from 'react';
import AutContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const autCtx = useContext(AutContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick ={autCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
