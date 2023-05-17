import React from 'react'

//function
const AdminHome = ({setisAdmin}) => {
   
  return (
    <div>Home
        <br/>
        <button onClick={() => setisAdmin(false)}>
            LogOut
        </button>
    </div>
  )
}

export default AdminHome