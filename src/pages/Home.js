import React, { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
import { Typography } from "@material-ui/core";
import AddProfileDetail from "../components/AddProfileDetails";
function Home() {
  // const { user } = useAuth();

  let { user } = useContext(UserContext);

  return (
    <div>
      <Typography variant="h4" color="primary" align="center">
        Welcome to student performance analyzer {user.displayName}
      </Typography>
      <Typography variant="h6" align="center">
        Kindly fill your details below
      </Typography>

      <AddProfileDetail />
    </div>
  );
}

export default Home;
