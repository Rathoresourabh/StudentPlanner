/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";
import "../assets/css/AuthGuard.css";
export default function AuthGuard({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div
        className="lds-spinner"
        style={{
          // width: "100vw",
          // height: "100vh",
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
