import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { Image, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import git from "../images/git5.png";
import search from "../images/search.jpg";
import { Context } from "../index";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.charCode === 13) {
      setValue(event.target.value);
      user.setUserIsDefined(true);
    }
  }

  useEffect(() => {
    if (user.isDefined === true) {
      user.setUserName(value);
      user.setUserIsDefined(false);
    }
  }, [user, user.isDefined, value]);

  return (
    <>
      <Navbar className={styles.navbar} expand="lg">
        <div className={"ml-4 mr-4"}>
          <Image className={styles.icon} src={git} />
        </div>
        <div className={styles.search}>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div
                className={"input-group-text"}
                style={{ background: "white" }}
              >
                {" "}
                <Image className={styles.icon_search} src={search} />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Enter GitHub username"
              value={value}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </Navbar>
    </>
  );
});

export default NavBar;
