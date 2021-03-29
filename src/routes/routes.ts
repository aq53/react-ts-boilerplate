import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import Reports from "../containers/Report";
import GithubReport from "../containers/InstructionReport";
import QEC_IPE_1_Report from "../containers/QEC_IPE_1";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/reports/instruction",
    name: "Instruction Report",
    icon: "ni ni-tv-2 text-primary",
    component: GithubReport,
    layout: "/admin"
  },
  {
    path: "/reports/mock",
    name: "Mock Report",
    icon: "ni ni-tv-2 text-primary",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/reports/qec/ipe/1",
    name: "IoBM|QEC|IPE-1",
    icon: "ni ni-tv-2 text-primary",
    component: QEC_IPE_1_Report,
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
