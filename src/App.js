import React,{useState ,useEffect} from "react"
import Routes  from './Routes'
import {auth} from './utils/firebase'

import {BrowserRouter } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'




let UserContext = React.createContext();
function App() {
  let [user,setUser] =  useState();
  
  
  useEffect(function () {

    auth.onAuthStateChanged(function (user) {
    setUser(user);
    console.log(user);
      

    });
    },[user]);
  
    return (
    <div className="App">
    <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
          
            <Routes />
          </BrowserRouter>
    </UserContext.Provider>
    </div>
  )
}

export  {App , UserContext} ;