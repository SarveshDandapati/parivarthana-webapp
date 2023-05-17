import React, { useEffect } from "react";
import "./SignIn.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SignUp = ({setisAdmin}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  function callSignIn(){
    fetch("http://localhost:5000/user/signin",{
      method: "post",
      body: JSON.stringify({email,password}),
      headers: {
        "Content-Type": "application/json",
      }
    }).then( response => response.json()).then(response => {
      if(response.isAdmin){
        setisAdmin(true)
      }
      localStorage.setItem("USER", JSON.stringify({email}));
      navigate("/");
    })
    
  }

  const navigate = useNavigate();  
  function handleCallBack(response){
    //console.log(response);
    var userObject = jwtDecode(response.credential);
    const cred = response.credential;
    const name = userObject.given_name; 
    const email = userObject.email;
    
    const result = fetch("https://parivarthana-website.onrender.com/user/signIn-google", {
      method: "post",
      body: JSON.stringify({name, email}),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      console.log(response.status);
      console.log(response.message);
      localStorage.setItem("USER", JSON.stringify({email}));
      navigate("/");
    })
    .catch(err => {
      console.log("Error occured while api call to backend");
    });
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "379483914693-ccia92t5906f0tog6bkgih3e6iudter5.apps.googleusercontent.com",
      scope: "",
      callback: handleCallBack,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    );

  }, []);

  return (
    <div id="sign-in-container">
      <main className="form-signin w-100 m-auto">
        {/* <form className="form-style"> */}
        <div className="form-style">
          <h1 className="h3 mb-3 fw-normal">Sign In</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={() => callSignIn()}>
            Sign in
          </button>
          </div>
        {/* </form> */}
        <br />
        <div id="signInDiv"></div>
      </main>
      <aside>
        <div className="background-img"></div>
      </aside>
    </div>
    
  );
};

export default SignUp;
