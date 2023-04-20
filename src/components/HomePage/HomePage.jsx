import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand text-white link-style">
                Parivarthana
              </Link>
            <button
              className="navbar-toggler bg-white text-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-md-auto gap-2">
                <li className="nav-item rounded">
                    <Link to="/" className="nav-link active text-white link-style">
                      Home
                    </Link>
                </li>
                {/* <li className="nav-item rounded">
                    <Link to="/about" className="nav-link text-white link-style">
                      About
                    </Link>
                </li> */}
                <li className="nav-item rounded">
                    <Link to="/contacts" className="nav-link text-white link-style">
                      Contacts
                    </Link>
                </li>
                <li className="nav-item rounded">
                    <Link to="/product" className="nav-link text-white link-style">
                      Products
                    </Link>
                </li>
                <li>
                  <form className="form-inline">
                    <button
                      className="btn btn-outline text-white"
                      type="button"
                    >
                      <Link to="/signIn" className="link-style">
                        Sign In
                      </Link>
                    </button>
                    {/* <button
                      className="btn btn-outline text-white border"
                      type="button"
                    >
                      <Link to="/signUp" className="link-style">
                        Sign Up
                      </Link>
                    </button> */}
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HomePage;
