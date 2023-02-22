const SignUp = () =>{
    return(
        <div id="sign-in-container">
      <main className="form-signin w-100 m-auto">
        <form className="form-style">
          <h1 className="h3 mb-3 fw-normal">Sign Up for a New Account</h1>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Harry Styles"/>
                <label htmlFor="floatingName">Name</label>
            </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingRePassword"
              placeholder="Re-enter Password"
            />
            <label htmlFor="floatingRePassword">Re-enter Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
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