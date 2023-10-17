import {
  FileDoneOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#001529",
  textAlign: "center",
  fontSize: 24,
  fontWeight: 500,
  color: "#1677ff",
};
const contentStyle = {
  backgroundColor: "#fff",
  padding: 14,
};
const footerStyle = {
  textAlign: "center",
  fontSize: 14,
  fontWeight: 500,
  color: "#3333FF",
  backgroundColor: "#E0E0E0",
};

const MainLayout = ({ children, selectedKeys }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigation = useNavigate();
  return (
    <Layout className="flex" style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="dark">
        <div className="demo-logo-vertical flex justify-center items-center w-[100%]">
          <img src={require("../assets/logo.png")} width={"100%"} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={selectedKeys ? selectedKeys : ["1"]}
          selectedKeys={selectedKeys ? selectedKeys : ["1"]}
          items={[
            {
              key: "1",
              icon: <PieChartOutlined />,
              label: 'DashBoard',
              onClick: () => navigation('/tong-quat')
            },
            {
              key: "2",
              icon: <FileDoneOutlined />,
              label: 'Quản lý báo các khối',
              onClick: () => navigation('/quan-ly-bao')
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle} className="flex justify-center items-center" >
          Quản lý tạp chí - Trung tâm Nghiên cứu Khoa học và Ứng dụng
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>
          Quản lý tạp chí ©2023 Tạo bởi Trung tâm Nghiên cứu Khoa học và Ứng
          dụng{" "}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
