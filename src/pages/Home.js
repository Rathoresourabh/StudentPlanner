import React, { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
import { Typography, Avatar } from "@material-ui/core";
import AddProfileDetail from "../components/AddProfileDetails";
import SwipeableDrawer from "../components/SwipeableDrawer";
function Home() {
  // const { user } = useAuth();

  let { user } = useContext(UserContext);

  return (
      <div className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "20px",
          
          
   
        }}
      >
        
        <h1>Hello {user.displayName}<span style={{display: "flex" , alignItems: "center"}}> Please Fill in your details to proceed Forward</span></h1>
      
        <SwipeableDrawer />

        <AddProfileDetail />

        
      </div>
  );
}

export default Home;
