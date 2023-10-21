import { FileDoneOutlined, PieChartOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo, userInfoSelector } from "../redux/userSlice";

const headerStyle = {
  backgroundColor: "#001529",
  textAlign: "center",
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

const MainLayout = ({ children, selectedKeys, title }) => {
  const dispatch = useDispatch();
  const user = useSelector(userInfoSelector);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    try {
      dispatch(setUserInfo(""));
      navigate("/");
    } catch (error) {
      console.log("Main layout logout error: " + error);
    }
  };

  useEffect(() => {
    document.title = title;
  }, [title]);
  

  return (
    <Layout className="flex" style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
      >
        <div className="demo-logo-vertical flex justify-center items-center w-[100%]">
          <img
            src={require("../assets/logo.png")}
            width={"100%"}
            alt="Đại học Lạc Hồng"
          />
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
              label: "DashBoard",
              onClick: () => navigate("/tong-quat"),
            },
            {
              key: "2",
              icon: <FileDoneOutlined />,
              label: "Quản lý báo các khối",
              onClick: () => navigate("/quan-ly-bao"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={headerStyle}
          className="flex justify-between items-center"
        >
          <div style={{ width: "10%" }} />
          <div
            className="text-2xl sm:text-sm md:text-sm lg:text-md xl:text-xl"
            style={{
              fontWeight: 500,
              color: "#1677ff",
            }}
          >
            Website Quản lý tạp chí - Trung tâm Nghiên cứu Khoa học và Ứng dụng
          </div>
          <div style={{ width: "10%" }}>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item
                    style={{ backgroundColor: "#FF6666", color: "#fff" }}
                    key="logout"
                    onClick={() => onLogout()}
                  >
                    Đăng xuất
                  </Menu.Item>
                </Menu>
              }
            >
              <Button className="text-white font-bold">
                <span>{user?.HoTen}</span>
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>
          Trung tâm Nghiên cứu Khoa học và Ứng dụng (cơ sở 6), Trường Đại học
          Lạc Hồng
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
