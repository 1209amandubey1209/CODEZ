import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


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
         <div style={{height:"1px",backgroundColor:"gray"}}></div>
         <div className="row mt-5">
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l flex-column top-tutorial text-center">
                <h5 >Top Tutorials</h5>
                <div><Link to='/htmltutorial' className="top-tutorial-item">HTML Tutorial</Link></div>
                <div><Link to='/csstutorial' className="top-tutorial-item">CSS Tutorial</Link></div>
                <div><Link to='/jstutorial' className="top-tutorial-item">JavaScript Tutorial</Link></div>
                <div><Link to='/howtotutorial' className="top-tutorial-item">How To Tutorial</Link></div>
                <div><Link to='/sqltutorial' className="top-tutorial-item">SQL Tutorial</Link></div>
                <div><Link to='/w3.csstutorial' className="top-tutorial-item">W3.CSS Python Tutorial</Link></div>
                <div><Link to='/bootstraptutorial' className="top-tutorial-item">BooTstrap Tutorial</Link></div>
                <div><Link to='/phptutorial' className="top-tutorial-item">PHP Tutorial</Link></div>
                <div><Link to='/javatutorial' className="top-tutorial-item">Java Tutorial</Link></div>
                <div><Link to='/c++tutorial' className="top-tutorial-item">C++ Tutorial</Link></div>
                <div><Link to='/jquerytutorial' className="top-tutorial-item">JQuery Tutorial</Link></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Exercises</h5>
                <div><Link to='/exercise' className="top-exercise-item">HTML Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">CSS Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">JavaScript Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">How To Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">SQL Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">W3.CSS Python Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">BooTstrap Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">PHP Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">Java Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">C++ Exercise</Link></div>
                <div><Link to='/exercise' className="top-exercise-item">JQuery Exercise</Link></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Top Examples</h5>
                <div><Link to='/examples' className="top-examples-item">HTML Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">CSS Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">JavaScript Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">How To Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">SQL Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">W3.CSS Python Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">BooTstrap Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">PHP Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">Java Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">C++ Examples</Link></div>
                <div><Link to='/examples' className="top-examples-item">JQuery Examples</Link></div>
            </div>
            <div className="col-12 col-sm-6 my-5 col-lg-3 col-l  flex-column top-tutorial text-center">
            <h5>Get Certified</h5>
                <div><Link to='/certificates' className="top-certificates-item">HTML Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">CSS Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">JavaScript Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">How To Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">SQL Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">W3.CSS Python Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">BooTstrap Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">PHP Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">Java Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">C++ Certificate</Link></div>
                <div><Link to='/certificates' className="top-certificates-item">JQuery Certificate</Link></div>
            </div>
            </div>
         </div>
     
    </>
  )
}

export default Footer;
