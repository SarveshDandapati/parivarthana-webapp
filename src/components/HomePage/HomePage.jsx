import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <Link to="/" className="link-style">
                Parivarthana
              </Link>
            </a>
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
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/" className="link-style">
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link text-white" href="#">
                    <Link to="/about" className="link-style">
                      About
                    </Link>
                  </a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link text-white" href="#">
                    <Link to="/contacts" className="link-style">
                      Contacts
                    </Link>
                  </a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link text-white" href="#">
                    <Link to="/product" className="link-style">
                      Products
                    </Link>
                  </a>
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
                    <button
                      className="btn btn-outline text-white border"
                      type="button"
                    >
                      <Link to="/signUp" className="link-style">
                        Sign Up
                      </Link>
                    </button>
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
