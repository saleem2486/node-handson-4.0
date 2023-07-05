import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(data);
  };
  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "http://localhost:7070/user/login";
    // console.log("working");
    // navigate("/home");
    if (email && password) {
      axios
        .post(API, data)
        .then((res) => {
          // alert("User registered");
          console.log(res.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter email and password.");
    }
  };
  const handleBackBtn = ()=>{
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleBackBtn} className="back-btn">Back</button>
      <div className="login-text">Login here</div>
      <div className="log-in">
        <div className="login-compt">
        
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <div className="Logcont1">
            <input
              className="login-1"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="Logcont2">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
      </div>
      <div className="homeBody">
        <img
          className="homeImg"
          src="https://images.ctfassets.net/vfkpgemp7ek3/2WO42hC1SEUS5xBXdEU4bL/0cfa8dab67a29526b62a0317ec263c95/banner.jpg"
          alt="no img"
        />
      </div>
    </div>
  );
}
export default Login;