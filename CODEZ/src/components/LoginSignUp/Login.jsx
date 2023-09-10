import React from 'react';
import './LoginSignUp.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link,NavLink ,Routes,Route} from 'react-router-dom';

function Login() {
 
  return (
    <>
    
      <div id="loginSignUp-container-fluid" className="container-fluid">
        <div className="row mb-5 justify-content-end ">
            <div className="col-1 " ><Link to='/'><CloseOutlinedIcon className='close-btn' /></Link></div>
        </div>
        <div id='loginSignUp-container' className="container ">
        <div className="row mt-4 text-center">
            <h1>Login</h1>
        </div>
        <hr />
        <div className="row">
            <div id='field-name'>Email</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="email"  />
            </div>
        </div>
        <div className="row mt-4">
        <div id='field-name'>Password</div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <input type="password"  />
            </div>
        </div>
        <div className="row mt-5 w-50 mx-auto mb-5">
           <button type='submit'><div id="field-name">Login</div></button>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Login
