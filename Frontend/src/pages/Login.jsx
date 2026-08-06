import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import Nav from "../components/nav-bar";
import toast from "react-hot-toast";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post(
        "/user/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      navigate("/");
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("error at login", error);
      toast.error("Invalid email or password.");
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogIn}>
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your account</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
