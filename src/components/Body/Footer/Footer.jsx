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
         <hr/>
         <div className="row mt-5">
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l flex-column top-tutorial text-center">
                <h5 >Top Tutorials</h5>
                <div><NavLink to='/htmltutorial' className="top-tutorial-item">HTML Tutorial</NavLink></div>
                <div><NavLink to='/csstutorial' className="top-tutorial-item">CSS Tutorial</NavLink></div>
                <div><NavLink to='/jstutorial' className="top-tutorial-item">JavaScript Tutorial</NavLink></div>
                <div><NavLink to='/howtotutorial' className="top-tutorial-item">How To Tutorial</NavLink></div>
                <div><NavLink to='/sqltutorial' className="top-tutorial-item">SQL Tutorial</NavLink></div>
                <div><NavLink to='/w3.csstutorial' className="top-tutorial-item">W3.CSS Python Tutorial</NavLink></div>
                <div><NavLink to='/bootstraptutorial' className="top-tutorial-item">BooTstrap Tutorial</NavLink></div>
                <div><NavLink to='/phptutorial' className="top-tutorial-item">PHP Tutorial</NavLink></div>
                <div><NavLink to='/javatutorial' className="top-tutorial-item">Java Tutorial</NavLink></div>
                <div><NavLink to='/c++tutorial' className="top-tutorial-item">C++ Tutorial</NavLink></div>
                <div><NavLink to='/jquerytutorial' className="top-tutorial-item">JQuery Tutorial</NavLink></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Exercises</h5>
                <div><NavLink to='/exercise' className="top-exercise-item">HTML Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">CSS Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">JavaScript Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">How To Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">SQL Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">W3.CSS Python Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">BooTstrap Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">PHP Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">Java Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">C++ Exercise</NavLink></div>
                <div><NavLink to='/exercise' className="top-exercise-item">JQuery Exercise</NavLink></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Examples</h5>
                <div><NavLink to='/examples' className="top-examples-item">HTML Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">CSS Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">JavaScript Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">How To Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">SQL Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">W3.CSS Python Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">BooTstrap Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">PHP Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">Java Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">C++ Examples</NavLink></div>
                <div><NavLink to='/examples' className="top-examples-item">JQuery Examples</NavLink></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Get Certified</h5>
                <div><NavLink to='/certificates' className="top-certificates-item">HTML Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">CSS Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">JavaScript Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">How To Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">SQL Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">W3.CSS Python Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">BooTstrap Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">PHP Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">Java Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">C++ Certificate</NavLink></div>
                <div><NavLink to='/certificates' className="top-certificates-item">JQuery Certificate</NavLink></div>
            </div>
            </div>
         </div>
     
    </>
  )
}

export default Footer
