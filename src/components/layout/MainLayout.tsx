import { Layout } from "antd";
// import { MenuProps } from "antd";
const { Header, Content } = Layout;
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { createElement } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

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
      <Sidebar></Sidebar>
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
      </Layout>
    </Layout>
  );
};

export default MainLayout;
