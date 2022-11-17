import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    if (password === "12345" && username === "ankit") {
      localStorage.setItem("usernamekey", username);
      localStorage.setItem("passkey", password);
      localStorage.setItem("isLogin", true);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};

export default SignInPage;
