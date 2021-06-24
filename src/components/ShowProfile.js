import React, { useContext } from "react";
import moment from "moment";
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

// const  = {
//   avatar: '',
//   city: '',
//   country: '',
//   jobTitle: '',
//   name: '',
//   timezo

function ShowProfile() {
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
          <Avatar alt={displayName} src = {photoURL} align="center"/>
          <Typography color="textPrimary" gutterBottom variant="h3">
            {displayName}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${moment().format("hh:mm A")} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShowProfile;
