import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/adminRoutes";
import { sidebarGenerator } from "../../utls/sidebarGenerator";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "admin";
  let sitebarItems;

  switch (role) {
    case userRole.ADMIN:
      sitebarItems = sidebarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sitebarItems = sidebarGenerator(adminPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sitebarItems = sidebarGenerator(adminPaths, userRole.STUDENT);
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
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
        items={sitebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
