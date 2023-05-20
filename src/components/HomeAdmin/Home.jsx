import React from 'react'
import { Link } from "react-router-dom";

//function
const AdminHome = ({setisAdmin}) => {
   
  return (
    <div>
        <Link to="/" >
                HOME
        </Link>
        <button onClick={() => setisAdmin(false)}>
            LogOut
        </button>
        <Link to="/admin/AddNewProduct" >
                Add new Product
        </Link>

    </div>
  )
}

export default AdminHome