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

function ShowProfile({ formData }) {
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
            <ul>
              <li>
                <b>firstName</b> -{formData.firstName}
              </li>
              <li>
                <b>lastName</b> -{formData.lastName}
              </li>
              <li>
                <b>email</b> -{formData.email}
              </li>
              <li>
                <b>phone</b> -{formData.phone}
              </li>
              <li>
                <b>state</b> -{formData.state}
              </li>
              <li>
                <b>country</b> -{formData.country}
              </li>
              <li>
                <b>Sem1Marks</b> -{formData.Sem1Marks}
              </li>
              <li>
                <b>Sem2Marks</b> -{formData.Sem2Marks}
              </li>
              <li>
                <b>Sem3Marks</b> -{formData.Sem3Marks}
              </li>
              <li>
                <b>Sem4Marks</b> -{formData.Sem4Marks}
              </li>
              <li>
                <b>Sem5Marks</b> -{formData.Sem5Marks}
              </li>
              <li>
                <b>Sem6Marks</b> -{formData.Sem6Marks}
              </li>
              <li>
                <b>Sem7Marks</b> -{formData.Sem7Marks}
              </li>
              <li>
                <b>Sem8Marks</b> -{formData.Sem8Marks}
              </li>
              <li>
                <b>Sem9Marks</b> -{formData.Sem9Marks}
              </li>
              <li>
                <b>Sem10Marks</b> -{formData.Sem10Marks}
              </li>
            </ul>
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
