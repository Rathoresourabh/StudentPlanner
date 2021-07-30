import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../utils/firebase";
import "../assets/css/style.css";
import Logo from "../assets/images/logo.png";

var uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    signInSuccessWithAuthResult: async function (authResult) {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.currentUser.sendEmailVerification();
          console.log("Check your email.");
        } catch (e) {
          console.log(e);
        }
      }
      return false;
    },
  },
};

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="BVP logo" />
        <h2>Welcome To Student Management Online Portal</h2>
        <div>Sign Up / Register</div>
        <h5> Kindly Login with your College registered Email </h5>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </header>
    </div>
  );
}
export default Login;
