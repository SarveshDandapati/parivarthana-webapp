import React from "react";
import "./NavBar.css";
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
                  <i className="bi bi-house-fill me-2"></i>Home
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-people-fill me-2"></i>About
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-telephone-fill me-2"></i>Contact
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-telephone-fill me-2"></i>Products
                </a>
              </li>
              <li>
                    <form className="form-inline">
                      <button className="btn btn-outline text-white" type="button">
                        Sign In
                      </button>
                      <button className="btn btn-outline text-white border" type="button">
                        Sign Up
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
