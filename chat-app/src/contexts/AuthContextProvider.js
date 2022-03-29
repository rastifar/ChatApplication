import React, {  useEffect, useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      setUser(user);
      setLoading(false);
      if(user) history.push("/chats");
    });
  }, [user,history]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
