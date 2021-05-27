import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Image, Pagination } from "react-bootstrap";
import styles from "../styles/Pages.module.css";
import arrowR from "../images/arrowR.png";
import arrowL from "../images/arrowL.png";

const Pages = observer(() => {
  const { user } = useContext(Context);
  const pageCount = Math.ceil(user.users.public_repos / 4);
  const pages = [];

  const portionSize = 5;

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <>
      <div></div>
      <div className={styles.pagination}>
        <Pagination className="mt-5">
          {portionNumber > 1 && (
            <Image
              className={styles.arrow}
              src={arrowL}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            />
          )}
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((page) => (
              <Pagination.Item
                key={page}
                active={user.pageR === page}
                onClick={() => {
                  user.setPage(page);
                }}
              >
                {page}
              </Pagination.Item>
            ))}
          {portionCount > portionNumber && (
            <Image
              className={styles.arrow}
              src={arrowR}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            />
          )}
        </Pagination>
      </div>
    </>
  );
});

export default Pages;
