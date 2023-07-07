import React, { useState } from "react";
import { Row, Col } from "antd";
import { ArticlesList, Buttons } from ".";
import { Articles } from "../../data";
function Article() {
  let [data, setData] = useState(Articles);
  return (
    <Row
      justify={"center"}
      style={{ height: "85vh", width: "100%", paddingTop: 20 }}
    >
      <Col
        span={24}
        style={{
          height: "50%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ArticlesList data={data} />
      </Col>
      <Col
        span={24}
        style={{
          height: "20%",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Buttons setData={setData} />
      </Col>
    </Row>
  );
}

export default Article;
