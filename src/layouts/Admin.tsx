import React from "react";
import { Switch, Redirect } from "react-router-dom";
import routes from "../routes/routes";
import AdminNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ProtectedRoute from "../routes/protectedRoute";


class Admin extends React.Component {
 
  getRoutes = (routes: any) => {
    return routes.map((prop: any, key: string) => {
      if (prop.layout === "/admin") {
        return (
          <ProtectedRoute
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={[]}
          logo={{
            innerLink: "/dashboard",
            outterLink: "/dashboard",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar {...this.props} />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
        </div>
      </>
    );
  }
}

export default Admin;
