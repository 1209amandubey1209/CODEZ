import React, { useState } from 'react'
import './MobileMenu.css'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from 'bootstrap';

function MobileMenu() {
  const [status,setStatus]=useState(true);
  return (
   <>
    {status?
    <div className="container-fluid d-block d-md-none">
    <div className="MobileMenu-sections row flex-column">
        <div className=" col"><NavLink className='mobileMenu-navLinks' to='/tutorialslist' onClick={()=>setStatus(false)}>Tutorials<ArrowDropDownIcon/></NavLink></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg' onClick={()=>setStatus(false)}>Exercises<ArrowDropDownIcon/></NavLink></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg' onClick={()=>setStatus(false)}>Get Certified<ArrowDropDownIcon/></NavLink></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg' onClick={()=>setStatus(false)}>Services<ArrowDropDownIcon/></NavLink></div>
    </div>
    <div className="row  ">
    <NavLink to='/signUp'  class="btn  my-2 btn-light col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-none d-sm-block">Sign Up</NavLink>
    </div>
</div>
:null
     }
   </>
  )
}

export default MobileMenu;
