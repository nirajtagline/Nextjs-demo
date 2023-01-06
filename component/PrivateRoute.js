import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const PrivateRoute = ({ children, Component }) => {
  const router = useRouter();
  const [role, setRole] = useState("");

  useEffect(() => {
    NProgress.start();
    const currentRole = localStorage.getItem("role");
    setRole(currentRole);
    NProgress.done();
  }, []);

  // Prevent direct change in local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "storage",
        (e) => {
          if (e?.key === "role") {
            localStorage.setItem("role", e.oldValue || "user");
          }
        },
        false,
      );
    }
  }, []);

  const handleRedirect = () => {
    router.push("/login");
  };

  return Component.private &&
    Component.role === "admin" &&
    role === Component.role ? (
    <div>{children}</div>
  ) : role ? (
    <div>
      <div>YOU ARE NOT ADMIN PLEASE SELECT ADMIN ROLE ON LOGIN PAGE</div>
      <button
        type="button"
        onClick={handleRedirect}
        style={{ padding: "15px 30px" }}
      >
        Redirecting to login page
      </button>
    </div>
  ) : (
    <div>Loading.....</div>
  );
};

export default PrivateRoute;
