import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { fetchUser } from "./http/userAPI";
import styles from "./styles/UserInfo.module.css";
import animation_loading from "./images/animation-loader.gif";
import { Context } from "./index";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.userName !== "") {
      setLoading(true);
      setTimeout(() => {
        fetchUser(user.userName)
          .then((data) => {
            user.setUser(data);
            user.setUserIsFound(true);
            user.setPage(1);
            setLoading(false);
          })
          .catch(() => {
            user.setUserIsFound(false);
            console.log("User not found");
            setLoading(false);
          });
      }, 1000);
    }
  }, [user, user.userName, user.setUser, user.setPage, user.setUserIsFound]);

  if (loading) {
    return (
      <>
        <img
          className={styles.loading}
          src={animation_loading}
          alt={"Загрузка..."}
        />
      </>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
