import {useContext} from 'react'
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";

export default function AuthGuard ({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div>
        <h1>Loading ... </h1>
      </div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}