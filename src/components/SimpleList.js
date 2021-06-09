import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList({ setOpenD }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  let items = [
    {
      title: "Home",
      path: "/Home",
      icon: <HomeIcon/>,
    },
    {
      title: "Profile",
      path: "/myProfile",
      icon: <AccountCircleIcon />,
    },
    {
      title: "Chart",
      path: "/chart",
      icon: <AssessmentIcon />,
    },
  ];
  return (
    <div className={classes.root}
    color='primary'>
      <List component="nav" aria-label="main mailbox folders">
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
                  color: location.pathname === item.path ? "blue" : "black",
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      
    </div>
  );
}