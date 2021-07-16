import React, { useContext, useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../App";
import ShowProfile from "../components/ShowProfile";
import AddProfileDetail from "../components/AddProfileDetails";
import { useHistory } from "react-router";
import axios from "axios";

function Profile() {
  let { user } = useContext(UserContext);

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserData/email/${user.email}`)
      .then((response) => {
        setShowData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, );
  let history = useHistory();
  return (
    <div style={{maxWidth:'1280px',margin:'auto'}}>
      <div>
        {showData.map(function (items, idx) {
          return <ShowProfile items={items} />;
        })}
      </div>
      {/* <Typography variant="h4" color="primary" align="center">
        Go back to Home Page
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
      </Typography> */}
      <AddProfileDetail />
    </div>
  );
}

export default Profile;
