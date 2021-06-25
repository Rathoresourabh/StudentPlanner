import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";

import { BrowserRouter } from "react-router-dom";

let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
