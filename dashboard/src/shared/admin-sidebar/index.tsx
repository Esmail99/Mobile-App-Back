import React, { Component } from "react";

import "./style.css";

import { NavLink } from "react-router-dom";

import { adminRoutes } from "globals/admin-routes";
import { RouteStructure } from "globals/interfaces/route.interface";

interface Prop {
  isVisible: boolean;
}

export default class AdminSidebar extends Component<Prop> {
  renderAdminRoutes = () => {
    return adminRoutes.map((adRoute: RouteStructure, index: number) => {
      if (adRoute.label) {
        return (
          <li key={index} className="sidebarItem">
            <NavLink exact to={adRoute.path}>
              {adRoute.label}
            </NavLink>
          </li>
        );
      } else return "";
    });
  };

  render() {
    return (
      <aside
        className="adminSidebar text-center"
        style={{ left: !this.props.isVisible ? "-245px" : "0" }}
      >
        <h1> Admin Dashboard </h1>
        <ul className="list-unstyled mt-2">{this.renderAdminRoutes()}</ul>
      </aside>
    );
  }
}
