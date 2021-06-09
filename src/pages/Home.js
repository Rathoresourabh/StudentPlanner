import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/Firebase";

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>This is a home page for {user ? user.displayName : ""}</h1>
      <p>{user ? user.email : ""}</p>
    </div>
  );
}

export default Home;
