import { Row, Col, Button } from "antd";
import React from "react";

function Buttons({ setData }) {
  return (
    <Row justify={"center"}>
      <Col span={4}>
        <Button>Most Upvoted</Button>
      </Col>
      <Col span={4}>
        <Button>Most Recent</Button>
      </Col>
      <Col span={4}>
        <Button>Reset</Button>
      </Col>
    </Row>
  );
}

export default Buttons;
