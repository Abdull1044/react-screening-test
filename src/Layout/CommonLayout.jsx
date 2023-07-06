import { Logo } from "../assets/images";
import { Button, Col, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

function CommonLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ paddingLeft: 10, background: "white" }}>
        <Row>
          <Col flex="none">
            <img src={Logo} height="40" alt="SurveyAuto" />
          </Col>
          <Col flex="auto">
            <Row justify="end">
              <Col span={2}>
                <Button icon={<LogoutOutlined />}>Logout</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row
          justify="center"
          align="middle"
          style={{ height: "100%", backgroundColor: "" }}
        >
          <Outlet />
        </Row>
      </Content>
      <Footer
        style={{
          background: "white",
        }}
      >
        <Row>
          <Col flex="auto">
            <Row justify="center" align={"middle"}>
              Project ©2023 Powered by
              <a
                style={{ paddingLeft: "4px" }}
                href="https://aisight.ai/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Logo} height="30" alt="SurveyAuto" />
              </a>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default CommonLayout;
