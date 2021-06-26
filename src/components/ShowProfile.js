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

import { UserContext } from "../App";

function ShowProfile({ items }) {
  let { user } = useContext(UserContext);
  const displayName = user.displayName;
  const photoURL = user.photoURL;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar alt={displayName} src={photoURL} align="center" />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {displayName}
          </Typography>

          <Typography color="textSecondary" variant="body1">
            {items.firstName}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {items.lastName}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {items.email}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            
            {items.phone}
            
          </Typography>
          <Typography color="textSecondary" variant="body1">
            
            {items.state}
            
          </Typography>
          <Typography color="textSecondary" variant="body1">
            
            {items.country}
            
          </Typography>
          <Typography color="textSecondary" variant="body1">
           
            {items.Sem1Marks}
            
          </Typography>
          <Typography color="textSecondary" variant="body1">
            
            
            {items.Sem2Marks}
            
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {items.firstName}
            {items.lastName}
            {items.email}
            {items.phone}
            {items.state}
            {items.country}
            {items.Sem1Marks}
            {items.Sem1Marks}
            {items.Sem2Marks}
            {items.Sem3Marks}
            {items.Sem4Marks}
            {items.Sem5Marks}
            {items.Sem6Marks}
            {items.Sem7Marks}
            {items.Sem8Marks}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${moment().format("hh:mm A")}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default ShowProfile;
