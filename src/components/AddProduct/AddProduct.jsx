import React, { useEffect, useState } from "react";
import { storage } from "../FirebaseAuth/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

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
        <div>
            ADD Product
            <br />
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e) => setname(e.target.value)}/>
            <br />
            <label htmlFor="">Description</label>
            <input type="text" onChange={(e) => setdes(e.target.value)} />
            <br />
            <label htmlFor="">cost</label>
            <input type="text" onChange={(e) => setcost(e.target.value)}/>
            <br />
            <input type="file" multiple onChange={(e) => {setProdImages(e.target.files)}}/>
            <br />
            {
                !check && (
                    
                    <button onClick={uploadImage}>Upload Image</button>
                )
            }
            {
                check && (
                    <button onClick={uploadProduct}>Upload Product</button>
                )
            }
        </div>
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