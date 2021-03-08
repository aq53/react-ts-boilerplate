import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Container,
  Nav,
  Row,
  Col,
} from "reactstrap";
import { ISidebar } from "../../interfaces";
import routes from "../../routes/routes";
import brandLogo from "../../assets/img/brand/10p-logo.jpg";
class Sidebar extends React.Component<ISidebar> {
  state = {
    collapseOpen: false,
  };
  constructor(props: any) {
    super(props);
    this.activeRoute.bind(this);
  }
  activeRoute(routeName: string) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  createLinks = (routes: any[]) => {
    return routes.map((prop, key) => {
      return prop.layout === "/admin" ? (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      ) : null;
    });
  };
  render() {
    const { logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img alt={"logo"} className="navbar-brand-img" src={brandLogo} />
            </NavbarBrand>
          ) : null}
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>
            <hr className="my-3" />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Sidebar;
