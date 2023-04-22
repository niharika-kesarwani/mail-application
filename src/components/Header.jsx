/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1>niharika's mail box</h1>
      <p>
        <NavLink className="navlink" to="/">
          Inbox
        </NavLink>
        <NavLink className="navlink" to="/spam">
          Spam
        </NavLink>
        <NavLink className="navlink" to="/trash">
          Trash
        </NavLink>
      </p>
    </div>
  );
};
