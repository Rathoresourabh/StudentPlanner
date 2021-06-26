import React, { useState , useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
// import { UserContext } from "../App";
import ShowProfile from "../components/ShowProfile";
import {useHistory} from "react-router";
import axios from "axios";
// let userDataContext = React.createContext();

function Profile() {
  // let emptyData = {
  //   firstName: undefined,
  //   lastName: undefined,
  //   email: undefined,
  //   phone: undefined,
  //   state: undefined,
  //   country: undefined,
  //   Sem1Marks: undefined,
  //   Sem2Marks: undefined,
  //   Sem3Marks: undefined,
  //   Sem4Marks: undefined,
  //   Sem5Marks: undefined,
  //   Sem6Marks: undefined,
  //   Sem7Marks: undefined,
  //   Sem8Marks: undefined,
  // };
  // let [userData, setUserData] = useState([]);
  
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/getUserData/",)
  //     .then((response) => {
         
  //         setUserData(response.data);
      
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }, []);

  let history = useHistory();
  return (
    <Typography variant="h4" color="primary" align="center">
      Please go back to Home Page and fill in your details 
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
      
      <div><ShowProfile /></div>
      </Typography>


      
   
  );
}

export default Profile
