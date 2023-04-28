/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "grey",
    borderRight: `5px solid ${isActive ? "black" : "white"}`,
  });

  return (
    <div>
      <NavLink style={getActiveStyle} className="navlink" to="/">
        Inbox
      </NavLink>
      <NavLink style={getActiveStyle} className="navlink" to="/spam">
        Spam
      </NavLink>
      <NavLink style={getActiveStyle} className="navlink" to="/trash">
        Trash
      </NavLink>
    </div>
  );
};
