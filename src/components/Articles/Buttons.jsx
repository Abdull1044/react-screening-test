import { Row, Col, Button } from "antd";
import React from "react";
import { DataSorting } from "../../data";
function Buttons({ setData }) {
  return (
    <Row justify={"center"}>
      <Col span={4}>
        <Button
          onClick={() => {
            setData(DataSorting["upvotes"]);
          }}
        >
          Most Upvoted
        </Button>
      </Col>
      <Col span={4}>
        <Button onClick={()=>setData(DataSorting['date'])}>Most Recent</Button>
      </Col>
      <Col span={4}>
        <Button>Reset</Button>
      </Col>
    </Row>
  );
}

export default Buttons;
