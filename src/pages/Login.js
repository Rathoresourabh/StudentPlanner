import React  ,{useEffect ,useContext ,useState} from "react";
import { GoogleOutlined } from "@ant-design/icons";

import { auth } from "../utils/firebase";

import firebase from "firebase/app";
import {UserContext} from '../App'
import {useHistory} from 'react-router-dom'
const Login = () => {
  let {user} = useContext(UserContext)
  let history = useHistory();
  
  useEffect(function () {
    
    
    console.log(user)
    
    if (user){
      history.push('/home')
    }
      
      
    
    },[user ,history]);
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome To Student Analysis!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
};
export default Login;
