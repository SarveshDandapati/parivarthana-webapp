import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainAxios } from "../../axios";

const SignUp = () =>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
      
    function userResgister(){
      const result = fetch("http://localhost:5000/user/signup", {
          method: "post",
          body: JSON.stringify({name, email, password, rePassword}),
          headers: {
            "Content-Type": "application/json",
        }
      }).then(res => {
        console.log("qwertyuiopasdfghjkxcvbnmsdfgbhnjm");
        navigate("/");
      }).catch(err => {
        console.log(err)
      })


    }

    return(
        <div id="sign-in-container">
      <main className="form-signin w-100 m-auto">
        <form className="form-style">
          <h1 className="h3 mb-3 fw-normal">Sign Up for a New Account</h1>
            <div className="form-floating">
                <input type="text" 
                  className="form-control" 
                  id="floatingName"
                  onChange={e => setName(e.target.value)}
                  placeholder="Harry Styles"/>
                <label htmlFor="floatingName">Name</label>
            </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingRePassword"
              placeholder="Re-enter Password"
              onChange={e => setRePassword(e.target.value)}
            />
            <label htmlFor="floatingRePassword">Re-enter Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div >
          <div >
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={()=>userResgister()}>
            Sign Up
          </button>
          </div>
        </form>
      </main>
      <aside>
        <div className="background-img"></div>
      </aside>
    </div>
    );
};
export default SignUp;