import React, { useContext, useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../App";
import ShowProfile from "../components/ShowProfile";
import { useHistory } from "react-router";
import axios from "axios";

function Profile() {
  let { user } = useContext(UserContext);

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserData/email/${user.email}`)
      .then((response) => {
        console.log(response);
        setShowData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  let history = useHistory();
  return (
    <div>
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
      </Typography>

      <div>
        {showData.map(function (items, idx) {
          return <ShowProfile items={items} />;
        })}
      </div>
    </div>
  );
}

export default Profile;
