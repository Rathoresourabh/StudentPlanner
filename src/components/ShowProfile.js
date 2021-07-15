import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",

    maxWidth: "800px",
    margin: "0 auto",
  },

}));

function ShowProfile({ items }) {
  let { user } = useContext(UserContext);
  const displayName = user.displayName;
  const photoURL = user.photoURL;
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardContent>
        {/* <Box
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Avatar alt={displayName} src={photoURL} align="center" />
          
        </Box> */}
        <Typography color="textPrimary" gutterBottom variant="h3">
          {displayName}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Email-{items.email}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Phone Number-{items.phone}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          State- {items.state}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Country- {items.country}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Father's Name- {items.FatherName}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Mother's Name-{items.MotherName}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
         Address- {items.Address}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Permanent Address- {items.PermanentAddress}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Father's Occupation- {items.FathersOccupation}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Mother's Occupation- {items.MothersOccupation}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Father's Contact Number- {items.FatherPhone}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Mother's Contact Number- {items.MotherPhone}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`${moment().format("hh:mm A")}`}
        </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default ShowProfile;
