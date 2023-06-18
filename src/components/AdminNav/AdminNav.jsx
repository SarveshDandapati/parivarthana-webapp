import React from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";

class AdminNav extends React.Component {
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
                    <Link to="/productPageAdmin" className="nav-link active text-white link-style">
                      Products
                    </Link>
                </li>
                <li className="nav-item rounded">
                    <Link to="/AddProduct" className="nav-link text-white link-style">
                      Add Products
                    </Link>
                </li>
                <li className="nav-item rounded">
                    <Link to="/" className="nav-link text-white link-style">
                      Log Out
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdminNav;
