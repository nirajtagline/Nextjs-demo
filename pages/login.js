import React, { useEffect, useState } from "react";
import NProgress from "nprogress";

const Login = () => {
  const [role, setRole] = useState();

  const handleSelect = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 2000);
    localStorage.setItem("role", role);
  };

  return (
    <div className="login-wrapper">
      <div>Role base login</div>
      <hr />
      <div>
        <select
          onChange={handleSelect}
          name="role"
          id="role"
          className="role-select"
          value={role}
        >
          <option disabled selected value>
            -- select an option --
          </option>
          <option className="option" value="admin">
            Admin
          </option>
          <option className="option" value="user">
            User
          </option>
        </select>
      </div>
      <div className="register-button">
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
