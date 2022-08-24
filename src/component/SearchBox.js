import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해 주세요." />
      </Col>
      <Col lg={2}>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
