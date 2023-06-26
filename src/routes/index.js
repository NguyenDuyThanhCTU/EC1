import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Home from "../components/Home/Home";

export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },

  {
    path: "/login",
    component: Login,
    Layout: EmptyLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: EmptyLayout,
  },
];
