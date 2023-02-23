import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{

  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [repassword, setRePassword]=useState("");
  const navigate = useNavigate();

  function callSignUp(){

    const result = fetch("http://localhost:5000/user/signup",{
      method: "post",
      body: JSON.stringify({name,email,password}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    navigate("/");
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
                        placeholder="Harry Styles"
                        required/>
                <label htmlFor="floatingName">Name</label>
            </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
              required
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
              required
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
              required
            />
            <label htmlFor="floatingRePassword">Re-enter Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={() => callSignUp()}>
            Sign Up
          </button>
        </form>
      </main>
      <aside>
        <div className="background-img"></div>
      </aside>
    </div>
    );
};
export default SignUp;