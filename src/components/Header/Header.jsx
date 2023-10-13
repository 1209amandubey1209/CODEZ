import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink,Link } from "react-router-dom";
import MobileMenu from '../MobileMenu/MobileMenu'





function Header() {
 
  const [menu,setMenu]=React.useState(false);
 
  return (
    <>
      <div className="container-fluid nav sticky-top">
        <div className="row col-12">
          <div className=" row align-items-center flex-md-row flex-column align-items-stretch col-xl-8 col-md-9 col-6 " >
            <NavLink to='/' id="logo"className="col-sm-2 " style={{textDecoration:"none",color:"white",backgroundColor:"transparent"}}><h1>CODEZ</h1></NavLink>
            <NavLink to='/tutorialslist' className='header-navlink col col-lg-3 col-md-3 ml-5 col-4 d-md-block d-none  pt-3  text-center'>Tutorials<ArrowDropDownIcon/></NavLink>
            <NavLink to='/uiegc' className="header-navlink col col-lg-2 d-none d-md-block col-3 pt-3 text-center ">Exercises<ArrowDropDownIcon/></ NavLink>
            <NavLink to='/ergfd'  className="header-navlink col col-lg-3  pt-3 text-center d-none d-lg-block ">Get Certified<ArrowDropDownIcon/></ NavLink>
            <NavLink to='/egef' className="header-navlink col col-xl-2  pt-3 d-none d-xl-block text-center " >Services<ArrowDropDownIcon/></NavLink>
            <div  className="ml-auto menu-btn my-2 pb-3 col-5 pt-3 d-md-none d-block text-center " onClick={()=>setMenu(!menu)}><MenuIcon/></div>

            
          </div>
          <div className="col ">
            <div className="row d-flex justify-content-end">
            <Link to='/login' class="btn my-2 btn-success col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3" > Login</Link>
            <Link to='/signUp'  class="btn  my-2 btn-light col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-none d-sm-block">Sign Up</Link>
            
            </div>
          </div>
        </div>
      </div>
      <div>
      
      </div>
     {menu?<MobileMenu/>:null}
      
      
    </>
  );
}
export default Header;
