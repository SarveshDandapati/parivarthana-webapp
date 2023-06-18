import React, { useEffect, useState } from "react";
import { storage } from "../FirebaseAuth/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import './AddProduct.css';  

const AddProduct = () => {
    const navigate = useNavigate();
    const [pname, setname] = useState("");
    const [prodImages, setProdImages] = useState([]);
    const [ImgeUrls, setImgeUrls] = useState([]);
    const [check, setcheck] = useState(false);
    // console.log(ImgeUrls);
    const [des, setdes] = useState("");
    const [cost, setcost] = useState("");
    const [inStock, setInStock] = useState(true)

    const uploadImage = async () => {
        Array.from(prodImages).map(async (image)=>{
            const imageRef = ref(storage, `productImage/${pname}/${v4()}`);
            const snapshot = await uploadBytes(imageRef, image)
            const downloadURL = await getDownloadURL(snapshot.ref)
            setImgeUrls(preImages=>([
                ...preImages,downloadURL
            ]))
        })            
    }

    const uploadProduct = () => {
        fetch("http://localhost:5000/product/register",{
                method: "post",
                body: JSON.stringify({pname,ImgeUrls,des,cost,inStock}),
                headers: {
                    "Content-Type": "application/json",
            }
        }).then( response => response.json()).then(response => {
            console.log(response);    
            // navigate("/");
        })
    }

    useEffect(() => {
      if(prodImages.length!=ImgeUrls.length || prodImages.length ==0) return
      setcheck(true)

      //execute when second parameter element valu changes 
      return()=>{
        setcheck(false)
      }

    }, [ImgeUrls,prodImages])
    

    return(
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h4 className="mb-5">Add Products</h4>
                        <Form>
                          <FormGroup className="form_group">
                            <span>Product title</span>
                            <input type="text" placeholder="Gift Card" onChange={(e) => setname(e.target.value)}/>
                            </FormGroup>  
                            <FormGroup className="form_group">
                            <span>Description</span>
                            <input type="text" placeholder="Type description here" onChange={(e) => setdes(e.target.value)}/>
                            </FormGroup> 
                            <div className="d-flex align-items-center justify-content-between gap-5">
                            <FormGroup className="form_group w-50">
                            <span>Price</span>
                            <input type="text" placeholder="100" onChange={(e) => setcost(e.target.value)}/>
                            </FormGroup> 
                            {/* <FormGroup className="form_group w-50">
                            <span>Size/Colour</span>
                            <select className="w-100 p-2">
                                <option value="size">Size</option>
                                <option value="colour">Colour</option>
                            </select>
                            </FormGroup> */}
                            </div>
                            <FormGroup className="form_group">
                            <span>Product Image</span>
                            <input type="file" multiple onChange={(e) => {setProdImages(e.target.files)}}/>
                            </FormGroup>            
                            {
                                !check && (
                                    
                                    <button className="buy_btn" type="submit" onClick={uploadImage}>Upload Image</button>
                                )
                            }
                            {
                                check && (
                                    <button className="buy_btn" type="submit" onClick={uploadProduct}>Upload Product</button>
                                )
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AddProduct

// 
// const imageRef = ref(storage, `productImage/${pname}/${v4()}`);
//             const uploadTask = uploadBytesResumable(imageRef, image);

//             uploadTask.on('state_changed',
//                 (snapshot) => {
                   
//                 },
//                 (error) => {

//                 },
//                 () => {
//                     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                         console.log('File available at', downloadURL);
//                     });
//                 }
//             );