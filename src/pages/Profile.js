import React, { useContext , useState} from "react";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import ShowProfile from "../components/ShowProfile";
function Profile() {

  
    
  let emptyData = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    state: undefined,
    country: undefined,
    Sem1Marks: undefined,
    Sem2Marks: undefined,
    Sem3Marks: undefined,
    Sem4Marks: undefined,
    Sem5Marks: undefined,
    Sem6Marks: undefined,
    Sem7Marks: undefined,
    Sem8Marks: undefined,
  }
  let [userData , setUserData] = useState (emptyData);
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
