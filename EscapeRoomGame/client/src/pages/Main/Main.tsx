import React from "react";
import { useNavigate ,Outlet } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    
    navigate("/register"); 
  };

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <>
      <div>Main</div>
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleLoginClick}>Login</button>
      <Outlet />
    </>
  );
}

export default Main;
