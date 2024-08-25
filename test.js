export const comonPath = [
  {
    name: "dashboard",
    path: "/admin/dashboard",
    element: "AdminDashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "createAdmin",
        path: "/admin/create-admin",
        element: "CreateAdmin",
      },
      {
        name: "createFaculty",
        path: "/admin/create-faculty",
        element: "CreateFaculty ",
      },
      {
        name: "createStudent",
        path: "/admin/create-student",
        element: "createStudent",
      },
    ],
  },
];

const result = comonPath.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      name: item.name,
      path: item.path,
    });
  }
  if (item.children) {
    item.children.map((child) => {
      acc.push({
        name: child.name,
        path: child.path,
      });
    });
  }
  return acc;
}, []);
console.log(result);
