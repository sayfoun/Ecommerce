import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import"../../styles/AuthStyles.css";
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const Navigate = useNavigate();


    //from function
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post( "/api/v1/auth/login",{ 
                email,
                password,
                
                });
            if(res && res.data.success){
                toast.success(res.data && res.message);
        
                Navigate('/');
            }else{
                toast.error(res.data.message);
            }
        }catch(error) {
            console.log(error);
            toast.error('Somthing went wrong');
        }
    
    };
return (
    <Layout title={"register-Ecommerce App"}>
<div className='form-container'>
            <h1 className='title-of-register'>Login</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
    
    
</div>


<div className="mb-3">
    
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter Your Email'
    required
    /> 
</div>

<div className="mb-3">
    
    <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword1"
    placeholder='Enter Your Password'
    required
/>
</div>

<button type="submit" className="btn btn-primary">Register</button>
</form>


</div>
</Layout>
)
};

export default Login