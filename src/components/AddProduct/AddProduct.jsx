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
    const [check, setcheck] = useState(false)
    // console.log(ImgeUrls);

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
                body: JSON.stringify({pname,ImgeUrls}),
                headers: {
                    "Content-Type": "application/json",
            }
        }).then( response => response.json()).then(response => {
            console.log(response);    
            navigate("/");
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
        // <div>
        //     ADD Product
        //     <br />
        //     <label htmlFor="">Name</label>
        //     <br />
        //     <input type="text" onChange={(e) => setname(e.target.value)}/>
        //     <br />
        //     <input type="file" multiple onChange={(e) => {setProdImages(e.target.files)}}/>
        //     <br />
        //     <button onClick={uploadImage}>Upload Image</button>
        //     <br />
        //     {
        //         check && (
        //             <button onClick={uploadProduct}>Upload Product</button>
        //         )
        //     }
        // </div>

        // Main HTML
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h4 className="mb-5">Add Products</h4>
                        <Form>
                          <FormGroup className="form_group">
                            <span>Product title</span>
                            <input type="text" placeholder="Gift Card" />
                            </FormGroup>  
                            <FormGroup className="form_group">
                            <span>Description</span>
                            <input type="text" placeholder="Type description here" />
                            </FormGroup> 
                            <div className="d-flex align-items-center justify-content-between gap-5">
                            <FormGroup className="form_group w-50">
                            <span>Price</span>
                            <input type="text" placeholder="100" />
                            </FormGroup> 
                            <FormGroup className="form_group w-50">
                            <span>Size/Colour</span>
                            <select className="w-100 p-2">
                                <option value="size">Size</option>
                                <option value="colour">Colour</option>
                            </select>
                            </FormGroup> 
                            </div>
                            <FormGroup className="form_group">
                            <span>Product Image</span>
                            <input type="file"/>
                            </FormGroup>
                            <button className="buy_btn" type="submit">
                                Add Product
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>

        // Main HTML
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