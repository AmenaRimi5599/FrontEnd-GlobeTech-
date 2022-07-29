import React from "react";
import "../assets/app.css";
import useWindowDimensions from "./useWindowDimensions";

function Login() {
  const { height, width } = useWindowDimensions();
  console.log(height);
  return (
    <>
      <div class="sidebar">
        <div className="sidebarcontent">
          <h1>
            Globetech <br />
            Company Limited
          </h1>
          <br />
          <h6>Make yourself digitalized & more effecient</h6>
        </div>
      </div>

      <div class="content">
        <div className="loginform">
          <div className="loginform2">
            <span>Welcome</span>
            <br />
            <br />
            <p>Sign in to your account</p>

            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
            ></input>
            <br />
            <input
              type="text"
              placeholder="Enter password"
              className="form-control"
            ></input>
            <br />
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
              style={{ width: "100%" }}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
