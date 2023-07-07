import React from "react";
import { List, Row, Col } from "antd";
function ArticlesList({data}) {
  return (
    <div
      style={{
        height: 500,
        width: "80%",
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ title, upvotes, date }, index) => (
          <List.Item>
            <List.Item.Meta
              title={<> # {index}</>}
              description={
                <Row gutter={16}>
                  <Col className="gutter-row" span={6}>
                    Title : {title}
                  </Col>
                  <Col className="gutter-row" span={6}>
                    Up Votes : {upvotes}
                  </Col>
                  <Col className="gutter-row" span={6}>
                    Date : {date}
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticlesList;
