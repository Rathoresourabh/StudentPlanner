import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Divider, IconButton } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CourseCard({ items }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={items.name} />
      <CardMedia
        className={classes.media}
        image={items.image}
        title={items.label}
        href={items.href}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {items.Description}
        </Typography>
        <Fab  aria-label="add" href={items.href}>
        <NavigationIcon />
      </Fab>
      </CardContent>
    </Card>
  );
}
