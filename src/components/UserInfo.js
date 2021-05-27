import React, { useContext } from "react";
import { Context } from "../index";
import { Image } from "react-bootstrap";
import styles from "../styles/UserInfo.module.css";
import iconFollowers from "../images/followers.jpg";
import iconFollowing from "../images/following.jpg";
import iconUserNotFound from "../images/userNotFound.jpg";
import { observer } from "mobx-react-lite";
import searchBig from "../images/searchBig.jpg";

const UserInfo = observer(() => {
  const { user } = useContext(Context);

  const image = user.users.avatar_url;
  const followers = (user.users.followers / 1000).toFixed(1);
  const following = user.users.following;

  if (user.userName === "") {
    return (
      <div>
        <div>
          <img
            className={styles.iconSearch}
            src={searchBig}
            alt={"Иконка поиска"}
          />
          <div className={styles.startSearch1}>Start with searching</div>
          <div className={styles.startSearch2}>a GitHub user</div>
        </div>
      </div>
    );
  }

  if (user.isFound === false) {
    return (
      <div>
        <div>
          <Image className={styles.iconUserNotFound} src={iconUserNotFound} />
          <div className={styles.noUser}>User not found</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {user.users.avatar_url && (
        <div>
          <Image className={styles.avatar} src={image} />
          <div className={"mt-4"}>
            <div className={styles.name}>{user.users.name}</div>
          </div>
          <div className={"mt-2"}>
            <div className={styles.login}>
              <a
                href={`https://github.com/${user.users.login}`}
                target="_blank"
                rel="noreferrer"
              >
                {user.users.login}
              </a>
            </div>
          </div>
          <div className={"mt-4"}>
            <div className={styles.container}>
              <Image className={styles.icon_followers} src={iconFollowers} />
              <div className={"ml-2 mr-4"}>
                <div className={styles.followers}>{followers}k followers</div>
              </div>
              <Image className={styles.icon_following} src={iconFollowing} />
              <div className={"ml-2"}>
                <div className={styles.following}>{following} following</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default UserInfo;
