import React ,{useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import axios from 'axios'
import {auth} from '../utils/Firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({setOpenD}) {
  const classes = useStyles();
  const history = useHistory();
  const {user} = useAuth();
  
  const handleLogout = async () => {
    await auth.signOut();
    history.push('/')
  }
  
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={() => setOpenD((state) => !state)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hello welcome to Student Planner! 
          </Typography>
          
          <Button color="inherit"
          onClick = {handleLogout} >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
