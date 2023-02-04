import React from "react";
import "./SignIn.css";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dateOfBirth, setDOB] = useState();

  const collectData = async () => {
    console.log("checking ");
    console.log(password);
    const result = await fetch("http://localhost:5000/user/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password, dateOfBirth }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div id="sign-in-container">
      <main className="form-signin w-100 m-auto">
        <form className="form-style">
          <h1 className="h3 mb-3 fw-normal">Sign In</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
      <aside>
        <div className="background-img"></div>
      </aside>
    </div>
    // <div className="signUp-page">
    //     <h1>Register</h1>
    //     <div className="inputUser">
    //         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the Name"/>
    //         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Email"/>
    //         <input type="text" value={dateOfBirth} onChange={(e)=>setDOB(e.target.value)} placeholder="Enter the DOB"/>
    //         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the Password"/>
    //     </div>
    //     <button type="submit" onClick={collectData}>Submit</button>
    //     <div>
    //         <button>Google SignUp</button>
    //     </div>
    // </div>
  );
};

export default SignUp;
