import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../utils/firebase";
import "../assets/css/login.css";

export default function Login() {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        const userInfo = authResult.additionalUserInfo;
        if (userInfo.isNewUser && userInfo.providerId === "password") {
          try {
            await authResult.user.sendEmailVerification();
            console.log("Check your email.");
          } catch (e) {
            console.log(e);
          }
        }
        return false;
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome To Student Portal</h2>
        <div>Sign Up / Register</div>

        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </header>
    </div>
  );
}
