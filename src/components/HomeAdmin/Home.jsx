import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './HomeAdmin.css'

//function
const AdminHome = ({setisAdmin}) => {
   
  return (
    <div>
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

    {/*  All Products HTML */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>      {/* Add image urls here */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button className="btn btn-danger">Delete</button></td>
                </tr>      {/* Add image urls here */}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>


     {/* All Products HTML */}
    </div>
  
    
  )
}

export default AdminHome