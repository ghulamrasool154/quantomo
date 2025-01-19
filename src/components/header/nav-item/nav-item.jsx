import NavLink from "@/components/nav-link/nav-link";
import React from "react";

const NavItem = ({ nav, classes }) => {
  return (
    <li>
      <NavLink href={nav.link} className={classes}>
        {nav.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
