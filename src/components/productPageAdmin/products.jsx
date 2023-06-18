import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './ProductAdmin.css'

const AdminProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/admin/getProducts", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => res.json()).
            then((json) => {
                console.log(json);
                setData(json);
            })
    }, [])
    return (
<div>
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
              {data?.map((item) => (
                <tr key={item._id}> 
                  <td><img src={item.images[0]} alt="prd" /></td>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td><button className="btn btn-danger">Delete</button></td>
                </tr>      
              ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
    )
}

export default AdminProduct;