import React, { useContext, useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../App";
import ShowProfile from "../components/ShowProfile";
import AddProfileDetail from "../components/AddProfileDetails";
import { useHistory } from "react-router";
import topImg from "../assets/images/topimg.jpg";
import SwipeableDrawer from "../components/SwipeableDrawer";
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
    <div style={{ maxWidth: "1280px", margin: "auto" }}>
      <h2 style={{ marginTop: 20, letterSpacing: "2px" }}>Personal Details</h2>
      <div>
        {showData.map(function (items, idx) {
          return <ShowProfile items={items} />;
        })}
      </div>

      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-md-4 d-flex align-items-center">
          <SwipeableDrawer />
          {/* <div className="top-img-float">
            <img alt="" src={topImg} />
          </div> */}
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <AddProfileDetail />
        </div>
      </div>
    </div>
  );
}

export default Profile;
