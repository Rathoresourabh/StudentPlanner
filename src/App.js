import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";
import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    const authObserver = firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (user) {
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;
          })
          .catch(function (error) {
            // handle error
          });
        return authObserver;
      }
    });
  });
  console.log("user", user);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export { App, UserContext };
