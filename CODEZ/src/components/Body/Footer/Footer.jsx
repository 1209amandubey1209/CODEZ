import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <>
    
     <div className="container-fluid ">
         <h3 className='text-center'>Follow us on:</h3>
         <div className="row mt-5">
            <div className="col text-center "><a href="https://www.facebook.com/"><FacebookIcon/></a></div>
            <div className="col text-center"><a href="https://www.instagram.com/"><InstagramIcon/></a></div>
            <div className="col text-center"><a href="https://twitter.com/"><TwitterIcon/></a></div>
            <div className="col text-center"><a href="https://www.linkedin.com/"><LinkedInIcon/></a></div>
         </div>
         <hr />
         <div className="row mt-5">
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l flex-column top-tutorial text-center">
                <h5 >Top Tutorials</h5>
                <div className="top-tutorial-item">HTML Tutorial</div>
                <div className="top-tutorial-item">CSS Tutorial</div>
                <div className="top-tutorial-item">JavaScript Tutorial</div>
                <div className="top-tutorial-item">How To Tutorial</div>
                <div className="top-tutorial-item">SQL Tutorial</div>
                <div className="top-tutorial-item">W3.CSS Python Tutorial</div>
                <div className="top-tutorial-item">BooTstrap Tutorial</div>
                <div className="top-tutorial-item">PHP Tutorial</div>
                <div className="top-tutorial-item">Java Tutorial</div>
                <div className="top-tutorial-item">C++ Tutorial</div>
                <div className="top-tutorial-item">JQuery Tutorial</div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Exercises</h5>
                <div className="top-tutorial-item">HTML Exercise</div>
                <div className="top-tutorial-item">CSS Exercise</div>
                <div className="top-tutorial-item">JavaScript Exercise</div>
                <div className="top-tutorial-item">How To Exercise</div>
                <div className="top-tutorial-item">SQL Exercise</div>
                <div className="top-tutorial-item">W3.CSS Python Exercise</div>
                <div className="top-tutorial-item">BooTstrap Exercise</div>
                <div className="top-tutorial-item">PHP Exercise</div>
                <div className="top-tutorial-item">Java Exercise</div>
                <div className="top-tutorial-item">C++ Exercise</div>
                <div className="top-tutorial-item">JQuery Exercise</div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Examples</h5>
                <div className="top-tutorial-item">HTML Examples</div>
                <div className="top-tutorial-item">CSS Examples</div>
                <div className="top-tutorial-item">JavaScript Examples</div>
                <div className="top-tutorial-item">How To Examples</div>
                <div className="top-tutorial-item">SQL Examples</div>
                <div className="top-tutorial-item">W3.CSS Python Examples</div>
                <div className="top-tutorial-item">BooTstrap Examples</div>
                <div className="top-tutorial-item">PHP Examples</div>
                <div className="top-tutorial-item">Java Examples</div>
                <div className="top-tutorial-item">C++ Examples</div>
                <div className="top-tutorial-item">JQuery Examples</div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Get Certified</h5>
                <div className="top-tutorial-item">HTML Certificate</div>
                <div className="top-tutorial-item">CSS Certificate</div>
                <div className="top-tutorial-item">JavaScript Certificate</div>
                <div className="top-tutorial-item">How To Certificate</div>
                <div className="top-tutorial-item">SQL Certificate</div>
                <div className="top-tutorial-item">W3.CSS Python Certificate</div>
                <div className="top-tutorial-item">BooTstrap Certificate</div>
                <div className="top-tutorial-item">PHP Certificate</div>
                <div className="top-tutorial-item">Java Certificate</div>
                <div className="top-tutorial-item">C++ Certificate</div>
                <div className="top-tutorial-item">JQuery Certificate</div>
            </div>
            </div>
         </div>
     
    </>
  )
}

export default Footer
