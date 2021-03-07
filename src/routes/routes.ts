import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import Reports from "../containers/Report";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "ni ni-tv-2 text-primary",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
];
export default routes;
