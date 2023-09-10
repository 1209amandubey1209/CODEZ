import React from "react";
import "./HomePage.css";
import Footer from "../Body/Footer/Footer";
import { NavLink } from "react-router-dom";


export default function HomePage() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row home-row">
          <div id="home-top" className="col ">
            <div className="mt-4 logo-text">
              CODEZ <br></br>
              <p>Welcome To CODEZ ,Skill up with best tutorials </p>
            </div>
          </div>
        </div>

        {/* HTML course row ********************************************************************/}

        <div
          className="row flex-md-row course-body flex-column"
          style={{ backgroundColor: "#F5DEB3" }}
        >
          <div className="col-md-6 col flex-column  ">
            <div className="row course-section text-center flex-column">
              HTML <br />
              <code>Uses for building web pages</code>
              <div className="tutorial-btn mx-auto my-5 bg-success">
                Learn HTML
              </div>
              <div className="tutorial-btn mx-auto bg-danger">
                video Tutorial
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="about ">
              <h2>What is HTML?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate quidem accusamus earum tempore, architecto vel ipsum
                perferendis explicabo nisi harum nostrum, dolore debitis!
                Aliquam voluptates cumque magni sunt odit veritatis ipsa
                sapiente est maiores voluptatibus, facilis voluptatem quae
                culpa. Ex atque dolore vero sint ea sed aliquid quasi inventore.
              </p>
            </div>
          </div>
        </div>

        {/* CSS tutorial scetion *************************************************8*/}

        <div
          className="row flex-md-row course-body flex-column"
          style={{ backgroundColor: "#ADD8E6" }}
        >
          <div className="col-md-6 col flex-column ">
            <div className="row course-section text-center flex-column">
              CSS <br />
              <code>Uses for Styling web pages</code>
              <div className="tutorial-btn mx-auto my-5 bg-success">
                Learn CSS
              </div>
              <div className="tutorial-btn mx-auto bg-danger">
                video Tutorial
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="about ">
              <h2>What is CSS?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate quidem accusamus earum tempore, architecto vel ipsum
                perferendis explicabo nisi harum nostrum, dolore debitis!
                Aliquam voluptates cumque magni sunt odit veritatis ipsa
                sapiente est maiores voluptatibus, facilis voluptatem quae
                culpa. Ex atque dolore vero sint ea sed aliquid quasi inventore.
              </p>
            </div>
          </div>
        </div>

        {/* Javascript tutorial section **************************************/}
        <div
          className="row flex-md-row course-body flex-column "
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <div className="col-md-6 col flex-column ">
            <div className="row course-section text-center flex-column">
              JavaScript <br />
              <code>This is Scripting language </code>
              <div className="tutorial-btn mx-auto my-5 bg-success">
                Learn JS
              </div>
              <div className="tutorial-btn mx-auto bg-danger">
                video Tutorial
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="about  ">
              <h2>What is JavaScript?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate quidem accusamus earum tempore, architecto vel ipsum
                perferendis explicabo nisi harum nostrum, dolore debitis!
                Aliquam voluptates cumque magni sunt odit veritatis ipsa
                sapiente est maiores voluptatibus, facilis voluptatem quae
                culpa. Ex atque dolore vero sint ea sed aliquid quasi inventore.
              </p>
            </div>
          </div>
        </div>

        {/* python tutorial section **************************************************************/}
        <div
          className="row flex-md-row course-body flex-column"
          style={{ backgroundColor: "#00FFFF" }}
        >
          <div className="col-md-6 col flex-column ">
            <div className="row course-section text-center flex-column">
              Python <br />
              <code>
                {" "}
                A widely-used general-purpose, high-level programming language
              </code>
              <div className="tutorial-btn mx-auto my-5 bg-success">
                Learn Python
              </div>
              <div className="tutorial-btn mx-auto bg-danger">
                video Tutorial
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="about  ">
              <h2>What is Python?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate quidem accusamus earum tempore, architecto vel ipsum
                perferendis explicabo nisi harum nostrum, dolore debitis!
                Aliquam voluptates cumque magni sunt odit veritatis ipsa
                sapiente est maiores voluptatibus, facilis voluptatem quae
                culpa. Ex atque dolore vero sint ea sed aliquid quasi inventore.
              </p>
            </div>
          </div>
        </div>

        {/* React Tutorial section ***********************************************************/}
        <div
          className="row flex-md-row course-body flex-column"
          style={{ backgroundColor: "#D2B48C" }}
        >
          <div className="col-md-6 col  flex-column ">
            <div className="row course-section text-center flex-column">
              React <br />
              <code>Most popular front-end development Javascript library</code>
              <div className="tutorial-btn mx-auto my-5 bg-success">
                Learn React
              </div>
              <div className="tutorial-btn mx-auto bg-danger">
                video Tutorial
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="about ">
              <h2>What is React?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate quidem accusamus earum tempore, architecto vel ipsum
                perferendis explicabo nisi harum nostrum, dolore debitis!
                Aliquam voluptates cumque magni sunt odit veritatis ipsa
                sapiente est maiores voluptatibus, facilis voluptatem quae
                culpa. Ex atque dolore vero sint ea sed aliquid quasi inventore.
              </p>
            </div>
          </div>
        </div>

        {/*****************************************Second Course****************************************************************/}
       <div className="row second-course-section">
        
        <NavLink className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#89CFF0"}}>
          PHP <br />          
          <code>A general-purpose scripting language</code>
        </NavLink>
        
        <NavLink className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#7393B3"}}>C++ <br />
        <code> A high-level , general-purpose programming language</code>
        </NavLink>
        <NavLink className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#96DED1"}}>jQuery <br />
        <code>A JavaScript library designed to simplify HTML DOM</code>
        </NavLink>
        <NavLink className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#FA5F55"}}>Java <br />
        <code>A programming language and computing platform</code>
        </NavLink>
        <NavLink to='/bootstrap' className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#EADDCA"}}>Bootstrap <br />
        <code>A free and open-source CSS framework directed at responsive</code>
        </NavLink>
        <NavLink to='/w3.css' className=" col-8 col-lg-5 course my-4 text-center" style={{backgroundColor:"#D3D3D3"}}>W3.CSS <br />
        <code>W3.CSS is a modern, responsive, mobile first CSS framework.</code>
        </NavLink>
       </div>
      </div>
      <Footer />
    </>
  );
}
