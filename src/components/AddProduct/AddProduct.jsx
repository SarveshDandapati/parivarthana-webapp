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
        <div>
            ADD Product
            <br />
            <label htmlFor="">Name</label>
            <br />
            <input type="text" onChange={(e) => setname(e.target.value)}/>
            <br />
            <input type="file" multiple onChange={(e) => {setProdImages(e.target.files)}}/>
            <br />
            <button onClick={uploadImage}>Upload Image</button>
            <br />
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