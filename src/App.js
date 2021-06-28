import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";

import { BrowserRouter } from "react-router-dom";
import axios from "axios";

let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();
  const [userData, setUserData] = useState({
    email: undefined,
  });

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      // if(user){
      //   user
      //   .getIdToken(true)
      //   .then(function(idToken){
      //     axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;

      //   })
      // .catch(function(error){
      //   // handle error

      // });
      // }
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, userData, setUserData }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
