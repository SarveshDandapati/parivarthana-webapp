import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Parivarthana
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
                <a className="nav-link active text-white" aria-current="page" href="#">
                <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-people-fill me-2"></i>About
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                <Link to="/product">Contacts</Link>
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                <Link to="/product">Products</Link>
                </a>
              </li>
              <li>
                    <form className="form-inline">
                      <button className="btn btn-outline text-white" type="button">
                      <Link to="/signUp">Sign In</Link>
                      </button>
                      <button className="btn btn-outline text-white border" type="button">
                      <Link to="/signUp">Sign Up</Link>
                      </button>
                    </form>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
