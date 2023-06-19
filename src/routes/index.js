import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import Home from "../components/Persona/Home";
import EmptyLayout from "../Layout/EmptyLayout";
export const AllRoutes = [
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
