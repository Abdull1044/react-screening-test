import React, { useState } from "react";
import { Row, Col } from "antd";
import { ArticlesList, Buttons } from ".";
import { Articles } from "../../data";
import "./index.css";
function Article() {
  let [data, setData] = useState(Articles);
  return (
    <Row className="articles" justify={"center"}>
      <Col span={24} className="content_center h50">
        <ArticlesList data={data} />
      </Col>
      <Col span={24} className="content_center flex_column h20">
        <Buttons setData={setData} />
      </Col>
    </Row>
  );
}

export default Article;
