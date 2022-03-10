import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();
  function success() {
    props.suckcess();
  }
  async function login() {
    try {
      const res = await axios.post(
        `https://jobs-api.squareboat.info/api/v1/auth/login`,
        JSON.stringify({ email: username, password: password }),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      success();
      history.push("/");
    } catch {
      alert("Invalid Credentials");
    }
  }

  return (
    <div
      data-testid="containerid"
      className="container .justify-content-center"
    >
      Please Login to continue
      <br />
      <br />
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setusername(e.target.value)}
        />
        {/* <small id="emailHelp" className="form-text text-muted">
          We'll never share your details with anyone else.
        </small> */}
      </div>
      <div className="form-group">
        <label htmlFor="InputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="InputPassword"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember Me
        </label>
      </div>
      <button
        type="submit"
        data-testid="loginBtn"
        className="btn btn-primary"
        id="btnLogin"
        onClick={(e) => login()}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
