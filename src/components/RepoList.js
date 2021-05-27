import React, { useContext, useEffect } from "react";
import styles from "../styles/RepoList.module.css";
import { Context } from "../index";
import { Image } from "react-bootstrap";
import RepoItem from "./RepoItem";
import noRepos from "../images/norepo.jpg";
import { observer } from "mobx-react-lite";
import { fetchRepositories } from "../http/userAPI";

const RepoList = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    if (user.userName !== "") {
      fetchRepositories(user.userName, 4, user.pageR).then((data) => {
        user.setRepos(data);
      });
    }
  }, [user, user.userName, user.pageR]);
  console.log(user.isFound);
  return (
    <>
      {user.isFound === true ? (
        user.users.public_repos ? (
          <div>
            <div className={styles.followers}>
              Repositories ({user.users.public_repos})
            </div>
            <div>
              {user.repos.map((user) => (
                <RepoItem key={user.id} rep={user} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Image className={styles.iconNoRepos} src={noRepos} />
              <div className={styles.emptyList}>Repository list is empty</div>
            </div>
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
});

export default RepoList;
