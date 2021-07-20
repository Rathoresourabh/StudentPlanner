import React, { useContext,useEffect } from "react";
import { UserContext } from "../App";
import SwipeableDrawer from "../components/SwipeableDrawer";
import topImg from "../assets/images/topimg.jpg";
import studenImg from "../assets/images/student.svg";
import {Link} from 'react-router-dom';
import axios from 'axios'
function Home() {
  // const { user } = useAuth();

  let { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserData/email/${user.email}`)
      .then((response) => {
        localStorage.setItem("prn", response.data[0].PRN);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [user.email]);



  return (
    <div className="">
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>

      <div className="container">
        <div
          className="row"
          style={{
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
            paddingTop: "70px",
            minHeight: "calc(100vh - 80px)",
          }}
        >
          <div className="col-md-12 text-center">
            <p>
              Hi,{" "}
              <span style={{ fontWeight: "900", letterSpacing: "1px" }}>
                {user.displayName}
              </span>
            </p>
            <h4>
              <span style={{ fontWeight: 900 }}>
                WELCOME TO ONLINE STUDENT REGISTRATION PORTAL
              </span>
            </h4>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={studenImg} style={{ maxWidth: "100%" }} />
          </div>
          <div
            className="col-md-6 d-flex pt-5 align-items-center"
            style={{ flexDirection: "column", textAlign: "right" }}
          >
            <div className="hompeage-banner">
              Students Admitted / Registered / Enrolled to Examination
            </div>
            <p className="proceed-text">
              Please Proceed for Online Application
            </p>
            <Link className="btn primary-btn mt-5" to="/profile">
              Fill Details
            </Link>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6">sdfsdf</div>
          <div className="col-md-6"><SwipeableDrawer /></div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
