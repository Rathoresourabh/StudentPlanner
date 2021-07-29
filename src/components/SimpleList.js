import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Avatar } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import { UserContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 240,
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },

  main: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function SimpleList({ setOpenD }) {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const photoURL = user.photoURL;
  let items = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <AccountCircleIcon />,
    },
    {
      title: "Notes",
      path: "/addNotes",
      icon: <SpeakerNotesIcon />,
    },
    {
      title: "Statistics",
      path: "/statistics",
      icon: <AssessmentIcon />,
    },
    
  ];
  return (
    <div
      className={classes.root}
      color="primary"
      style={{ paddingTop: "20px" }}
    >
      <div className={classes.main}>
        <Avatar
          alt={user.displayName}
          src={photoURL}
          style={{ width: "80px", height: "80px", display: "flex" }}
        />
      </div>

      <List component="nav" style={{ paddingTop: "100px" }}>
        {items.map(function (item, idx) {
          return (
            <ListItem
              ket={idx}
              button
              onClick={() => {
                history.push(item.path);
                setOpenD(false);
                console.log(location.pathname);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                style={{
                  color: location.pathname === item.path ? "plum" : "black",
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider variant="middle" />
    </div>
  );
}
