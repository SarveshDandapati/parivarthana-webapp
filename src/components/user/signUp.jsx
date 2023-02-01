import React from "react";
import './signUp.css'
import {useState} from "react";


const SignUp = ()=>{
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [dateOfBirth,setDOB]=useState();

    const collectData =async ()=>{
        console.log("checking ");
        console.log(password);
        const result = await fetch('http://localhost:5000/user/signup',{
            method: 'post',
            body: JSON.stringify({name,email,password,dateOfBirth}),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    return(
        <div className="signUp-page">
            <h1>Register</h1>
            <div className="inputUser">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the Name"/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Email"/>
                <input type="text" value={dateOfBirth} onChange={(e)=>setDOB(e.target.value)} placeholder="Enter the DOB"/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the Password"/>
            </div>
            <button type="submit" onClick={collectData}>Submit</button>
        </div>
    )
}

export default SignUp;