import React, { useContext } from "react";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import ShowProfile from "../components/ShowProfile";
function Profile() {
  let { user } = useContext(UserContext);
  let history = useHistory();
  return (
    <Typography variant="h4" color="primary" align="center">
      Please go back to Home Page and fill in your details {user.displayName}
      <div>
        <Button
          variant="outlined"
          color="primary"
          align="center"
          onClick={function () {
            history.push("/");
          }}
        >
          Go Back To Home Page
        </Button>
      </div>
      <ShowProfile />
    </Typography>
  );
}

export default Profile;
