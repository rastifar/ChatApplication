import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import axios from "axios";


//Componetns
import Navbar from "./Navbar";

//Context
import { AuthContext } from "../contexts/AuthContextProvider";
//Styles
import styles from "./Chats.module.css";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();
  
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
   
   axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "22d11fdb-b32c-4b56-a9f7-921840a12f7e",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        const formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL)
          .then(avatar => {
          formdata.append("avatar", avatar, avatar.name);
          axios.post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "6b771177-d787-4120-99cb-ea9a0c048ecf",
              }
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
}

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh-50px)"
        projectID="22d11fdb-b32c-4b56-a9f7-921840a12f7e"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
