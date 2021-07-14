import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
import { Avatar } from "@material-ui/core";
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

export default function ButtonAppBar({ setOpenD }) {
  const classes = useStyles();
  let { user } = useContext(UserContext);

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenD((state) => !state)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
          <Avatar alt={user.displayName} src={user.photoURL} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
