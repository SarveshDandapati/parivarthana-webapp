import React from 'react'
import { Link } from "react-router-dom";

//function
const AdminHome = ({setisAdmin}) => {
   
  return (
    // <div>
    //     <Link to="/" >
    //             HOME
    //     </Link>
    //     <button onClick={() => setisAdmin(false)}>
    //         LogOut
    //     </button>
    //     <Link to="/admin/AddNewProduct" >
    //             Add new Product
    //     </Link>

    // </div>
    <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
              <Link to="" className="navbar-brand text-white link-style">
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
                      Products
                    </Link>
                </li>
                <li className="nav-item rounded">
                    <Link to="/admin/AddNewProduct" className="nav-link text-white link-style">
                      Add Products
                    </Link>
                </li>
                <li className="nav-item rounded">
                    <button className="nav-link text-white link-style" onClick={() => setisAdmin(false)}>
                      Log Out
                    </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default AdminHome