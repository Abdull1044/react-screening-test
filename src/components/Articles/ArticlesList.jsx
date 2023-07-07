import React from "react";
import { List, Row, Col } from "antd";
function ArticlesList({data}) {
  return (
    <div
    className="articles_list"
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
