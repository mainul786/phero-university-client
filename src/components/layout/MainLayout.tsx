import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { adminSidebarItem } from "../../routes/adminRoutes";

// const items: MenuProps[`items`] = [
//   {
//     key: "1",
//     label: "Dashbord",
//   },
//   {
//     key: "2",
//     label: "Profile",
//   },
//   {
//     key: "3",
//     label: "User Managment",
//     children: [
//       {
//         key: "admin",
//         label: <NavLink to={"/admin/create-admin"}>Create-Admin</NavLink>,
//       },
//       {
//         key: "faculty",
//         label: <NavLink to={"/admin/create-faculty"}>Create-Faculty</NavLink>,
//       },
//       {
//         key: "student",
//         label: <NavLink to={"/admin/create-student"}>Create-Student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH-university</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
