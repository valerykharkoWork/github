import React from "react";
import styles from "../styles/RepoItem.module.css";
import { Card } from "react-bootstrap";

const RepoItem = ({ rep }) => {
  return (
    <Card className={styles.card}>
      <div className={"mt-4 ml-4"}>
        <div className={styles.nameRepo}>
          <a href={rep.html_url} target="_blank" rel="noreferrer">
            {rep.name}
          </a>
        </div>
        <div className={"mt-3"}>
          <div className={styles.descriptionRepo}>{rep.description}</div>
        </div>
      </div>
    </Card>
  );
};

export default RepoItem;
