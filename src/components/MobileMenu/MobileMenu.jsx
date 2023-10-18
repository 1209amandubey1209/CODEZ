import React, { useState } from 'react'
import './MobileMenu.css'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function MobileMenu() {
  const [status,setStatus]=useState(true);
  return (
   <>
    {status?
    <div className="container-fluid d-block d-md-none">
    <div className="MobileMenu-sections row flex-column">
        <div className=" col"><Link className='mobileMenu-navLinks' to='/tutorialslist' onClick={()=>setStatus(false)}>Tutorials<ArrowDropDownIcon/></Link></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><Link className='mobileMenu-navLinks' to='/exerciseslist' onClick={()=>setStatus(false)}>Exercises<ArrowDropDownIcon/></Link></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><Link className='mobileMenu-navLinks' to='/erg' onClick={()=>setStatus(false)}>Get Certified<ArrowDropDownIcon/></Link></div>
    </div>
    <div className="row MobileMenu-sections ">
    <div className=" col"><Link className='mobileMenu-navLinks' to='/erg' onClick={()=>setStatus(false)}>Services<ArrowDropDownIcon/></Link></div>
    </div>
    <div className="row  ">
    <Link to='/signUp'  class="btn  my-2 btn-light col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-none d-sm-block">Sign Up</Link>
    </div>
</div>
:null
     }
   </>
  )
}

export default MobileMenu;
