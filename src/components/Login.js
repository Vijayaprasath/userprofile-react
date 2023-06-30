import React from "react";
import Button from "./Button";
import Profile from "./UserProfile";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const loginClick = (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value === 'vijay@gmail.com' && password.value === 'vijay'){
        console.log("clicked");
        // navigate("/login");
        navigate("/userProfile");
    } else {
       console.log('invalid credentials');
    }
    //   history.push('./UserProfile');
  };

  return (
    <>
      <form>
        <div style={divStyle}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />{" "}
          <br /> <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />{" "}
          <br />
          <br />
          <Button
            text="Log in"
            color="#1877f2"
            onClick={loginClick}
          /> <br /> <br />
          <a href="" style={{ textDecoration: "none", color: "blue" }}>
            Forgotten password ?
          </a>{" "}
          <br />
          <p>---------------------------</p>
          <Button text="Create Account" color="lightgreen" />
        </div>
      </form>
    </>
  );
};
const divStyle = {
  border: "2px solid black ",
  marginLeft: "525px",
  marginRight: "525px",
  padding: "10px",
};

export default Login;
