import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../components/nav-bar";
import Footer from "../components/Footer";
import "../register.css";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);

    try {
      await axios.post("http://localhost:8383/api/user/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
      });
      navigate("/");
    } catch (error) {
      console.error("ERROR creating user", error);
      alert("Cannot creat account please try again later ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <Nav />
      <section className="register-section">
        <div className="register-overlay"></div>
        <div className="register-container" data-aos="fade-up">
          <div className="register-card">
            <div className="register-header">
              <h2>Create Your Account</h2>
              <p>Join Garden Inn for exclusive offers and easy booking</p>
            </div>

            {error && <div className="register-error">{error}</div>}
            {success && <div className="register-success">{success}</div>}

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-with-icon">
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-with-icon">
                    <i className="fa-regular fa-user"></i>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-with-icon">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-with-icon">
                    <i className="fa-solid fa-phone"></i>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-with-icon">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bookBtn full-width-btn"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Register"}
              </button>
            </form>

            <div className="register-footer">
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
