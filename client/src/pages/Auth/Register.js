import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { toast} from "react-toastify"
import"../../styles/AuthStyles.css";
const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const Navigate = useNavigate()
    //from function
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post( "/api/v1/auth/register",{
                name,
                email,
                password,
                phone,
                address,
                });
            if(res && res.data.success){
                toast.success(res.data && res.message);
                Navigate('/login');
            }else{
                toast.error(res.data.message);
            }
        }catch(error) {
            console.log(error);
            toast.error('Somthing went wrong');
        }
    toast.success("Register successfully");
    };


return (
<Layout title={"register-Ecommerce App"}>
<div className='form-container'>
            <h1 className='title-of-register'>register Page</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
    
    <input
    type="text" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="form-control" 
    id="exampleInputName1"  
    placeholder='Enter Your Name'
    required
    autoFocus
    /> 
    
</div>


<div className="mb-3">
    
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter Your Email'
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
    />
</div>

<div className="mb-3">
    
    <input 
    type="text" 
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="form-control" 
    id="exampleInputPhone1"  
    placeholder='Enter Your Phone'
    /> 
</div>


<div className="mb-3">

    <input
    type="text"
    value={address}
    onChange={(e) => setAddress(e.target.value)} 
    className="form-control" 
    id="exampleInputAddress1" 
    placeholder='Enter Your Address'
    /> 
</div>

<button type="submit" className="btn btn-primary">Register</button>
</form>


</div>
</Layout>
);
}

export default Register