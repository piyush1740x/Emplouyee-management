import React, { useContext, useEffect, useState } from "react";
import EmployDashboard from "./components/dashborad/employDashboard";
import AdminDashboard from "./components/dashborad/AdminDashboard";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [error, setError] = useState("");
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    setError(""); // Reset error message on each login attempt

    if (email === "h@g.com" && password === "123") {
      const adminData = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("Authentication data not available.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user ? (
        <>
          <Login handleLogin={handleLogin} />
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </>
      ) : user === "admin" ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : user === "employee" ? (
        <EmployDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
