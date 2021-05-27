import React from "react";
import { observer } from "mobx-react-lite";
import Pages from "../components/Pages";
import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../components/UserInfo";
import RepoList from "../components/RepoList";

const MainPage = observer(() => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col md={3} className="ml-5">
          <UserInfo />
        </Col>
        <Col md={8}>
          <RepoList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default MainPage;
