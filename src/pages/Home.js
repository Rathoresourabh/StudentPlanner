import React, { useContext } from "react";
import { UserContext } from "../App";
import SwipeableDrawer from "../components/SwipeableDrawer";
function Home() {
  // const { user } = useAuth();

  let { user } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
            paddingTop: "20px",
            minHeight:'calc(100vh - 80px)'
          }}
        >
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <SwipeableDrawer />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <h1>
              Hello {user.displayName}
              <span style={{ display: "flex", alignItems: "center" }}>
                {" "}
                Please Fill in your details to proceed Forward
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
