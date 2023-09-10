import React from 'react'
import './MobileMenu.css'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from 'bootstrap';

function MobileMenu() {
  return (
   <>
    <div className="container-fluid d-block d-md-none">
        <div className="MobileMenu-sections row flex-column">
            <div className=" col"><NavLink className='mobileMenu-navLinks' to='/tutorialslist'>Tutorials<ArrowDropDownIcon/></NavLink></div>
        </div>
        <div className="row MobileMenu-sections ">
        <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg'>Exercises<ArrowDropDownIcon/></NavLink></div>
        </div>
        <div className="row MobileMenu-sections ">
        <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg'>Get Certified<ArrowDropDownIcon/></NavLink></div>
        </div>
        <div className="row MobileMenu-sections ">
        <div className=" col"><NavLink className='mobileMenu-navLinks' to='/erg'>Services<ArrowDropDownIcon/></NavLink></div>
        </div>
        <div className="row  ">
        <NavLink to='/signUp'  class="btn  my-2 btn-light col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-none d-sm-block">Sign Up</NavLink>
        </div>
    </div>
   </>
  )
}

export default MobileMenu
