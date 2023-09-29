import React from "react";
import { NavLink } from "react-router-dom";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import {
  ADMIN_PRODUCTS,
  ADMIN_ADD_PRODUCT,
  ADMIN_USERS,
  ADMIN_ORDERS,
  ADD_PRODUCT,
  GET_USER,
  ADMIN_DASHBOARD,
  GET_USERS,
  ADD_USER,
} from "@/constants/routes";

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_DASHBOARD}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Products
        </NavLink>
      </div>
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADD_PRODUCT}
        >
          Add Product
        </NavLink>
      </div>
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_USERS}
        >
          Users
        </NavLink>
      </div>
    </div>
  </aside>
);

export default SideNavigation;
