import React, { useState } from 'react';
import './LoginSignUp.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';



function SignUp() {
     
   const [userReg,setUserReg]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
   })

   const handleInput=(e)=>{

    const {name,value}=e.target  ;
    setUserReg({...userReg,[name]:value})
    
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
   
    
 }
    

  return (
    <>

      <form onSubmit={handleSubmit} id="loginSignup-container-fluid" className="container-fluid">
        <div className="row mb-2 justify-content-end ">
            <div className="col-1 " ><Link to='/'><CloseOutlinedIcon className='close-btn' /></Link></div>
        </div>
        <div id='loginSignUp-container' className="container ">
        <div className="row mt-4 text-center">
            <h1>SignUp</h1>
        </div>
        <hr />
        <div className="row">
            <div className='field-name'>Username</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="text" autoComplete='off' onChange={handleInput} name="username" value={userReg.username} id='username' />
            </div>
        </div>
        <div className="row">
            <div className='field-name'>Email</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="email" autoComplete='off' onChange={handleInput} name="email" value={userReg.email} id='email'  />
            </div>
        </div>
        <div className="row">
            <div className='field-name'>Phone</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="text" maxLength="10" autoComplete='off' onChange={handleInput} name="phone" value={userReg.phone} id='phone' />
            </div>
        </div>
        <div className="row mt-4">
        <div className='field-name'>Password</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="password" autoComplete='off' onChange={handleInput} name="password" value={userReg.password} id='password' />
            </div>
        </div>
        <div className="row mt-5 w-50 mx-auto mb-3">
           {/* <button type='submit' ><div className="field-name">SignUp</div></button> */}
           <button type='submit' >SignUp</button>
        </div>
      </div>
      </form>
      
    </>
  )
}

export default SignUp;
