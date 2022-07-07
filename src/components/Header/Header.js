import React from "react";
import { FaUserGraduate } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div>
        {" "}
        <span>
          <FaUserGraduate />
        </span>{" "}
        user
      </div>
      <div>logIn / signUp</div>
    </div>
  );
};

export default Header;
