import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CSS from './components/Body/CSS/CSS';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TutorialsList from './components/TutorialsList/TutorialsList';
import Login from './components/LoginSignUp/Login';
import SignUp from './components/LoginSignUp/SignUp';
import Bootstrap from './components/Body/BOOTSTRAP/Bootstrap';
import HTML from './components/Body/HTML/HTML';
import ErrorPage from './components/Body/ErrorPage/ErrorPage';
import HtmlIntroduction from './components/Body/HTML/Content/HtmlIntroduction';
import HtmlBasic from './components/Body/HTML/Content/HtmlBasic';
import HtmlSemantics from './components/Body/HTML/Content/HtmlSemantics';
import HtmlResponsive from './components/Body/HTML/Content/HtmlResponsive';
import HtmlLayout from './components/Body/HTML/Content/HtmlLayout';
import HtmlAttributes from './components/Body/HTML/Content/HtmlAttributes';
import HtmlBlockInline from './components/Body/HTML/Content/HtmlBlock&Inline';
import HtmlCharset from './components/Body/HTML/Content/HtmlCharset';
import HtmlClasses from './components/Body/HTML/Content/HtmlClasses';
import HtmlColors from './components/Body/HTML/Content/HtmlColors';
import HtmlComments from './components/Body/HTML/Content/HtmlComments';
import HtmlCSS from './components/Body/HTML/Content/HtmlCSS';
import HtmlElements from './components/Body/HTML/Content/HtmlElements';
import HtmlEmojis from './components/Body/HTML/Content/HtmlEmojis';
import HtmlEntities from './components/Body/HTML/Content/HtmlEntities';
import HtmlFavicon from './components/Body/HTML/Content/HtmlFavicon';
import HtmlFilePaths from './components/Body/HTML/Content/HtmlFilePaths';
import HtmlFormatting from './components/Body/HTML/Content/HtmlFormatting';
import HtmlHead from './components/Body/HTML/Content/HtmlHead';
import HtmlHeadings from './components/Body/HTML/Content/HtmlHeading';
import HtmlId from './components/Body/HTML/Content/HtmlId';
import HtmlIframes from './components/Body/HTML/Content/HtmlIframes';
import HtmlImages from './components/Body/HTML/Content/HtmlImages';
import HtmlJavascript from './components/Body/HTML/Content/HtmlJavascript';
import HtmlLinks from './components/Body/HTML/Content/HtmlLinks';
import HtmlList from './components/Body/HTML/Content/HtmlList';
import HtmlPageTitle from './components/Body/HTML/Content/HtmlPageTitle';
import HtmlParagraphs from './components/Body/HTML/Content/HtmlParagraphs';
import HtmlQuotations from './components/Body/HTML/Content/HtmlQuotations';
import HtmlStyleGuide from './components/Body/HTML/Content/HtmlStyleGuide';
import HtmlStyles from './components/Body/HTML/Content/HtmlStyles';
import HtmlSymbols from './components/Body/HTML/Content/HtmlSymbols';
import HtmlTables from './components/Body/HTML/Content/HtmlTables';
// import MobileMenu from './components/MobileMenu/MobileMenu';
import W3CSS from './components/Body/W3.CSS/W3CSS';
import Sass from './components/Body/Sass/Sass';
import Colors from './components/Body/Colors/Colors';
import Icons from './components/Body/Icons/Icons';
import SVG from './components/Body/SVG/SVG';
import Canvas from './components/Body/Canvas/Canvas';
import Graphics from './components/Body/Graphics/Graphics';
import AJAX from './components/Body/AJAX/AJAX';
import AngularJS from './components/Body/AngularJS/AngularJS';
import AppML from './components/Body/AppML/AppML';
import Javascript from './components/Body/Javascript/Javascript';
import JQuery from './components/Body/JQuery/JQuery';
import JSON from './components/Body/JSON/JSON';
import Reactjs from './components/Body/React/React';
import Vue from './components/Body/Vue/Vue';
import W3JS from './components/Body/W3.JS/W3JS';





function App() {
  return (
    <>
    
     
      {/* <MainBody/> */}
      
      {/* <TutorialsPage/> */}
      <BrowserRouter>
      <Header/>
      
      
      
      
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
   {/* ******************************************HTML SECTION*********************************************8 */}
          <Route path='/htmltutorial' element={<HTML/>}>
          <Route path='/htmltutorial/htmlIntro' element={<HtmlIntroduction/>}></Route>
          <Route path='/htmltutorialhtmlBasic' element={<HtmlBasic/>}></Route>
          <Route path='/htmltutorial/htmlSemantics' element={<HtmlSemantics/>}></Route>
          <Route path='/htmltutorial/htmlResponsive' element={<HtmlResponsive/>}></Route>
          <Route path='/htmltutorial/htmlLayout' element={<HtmlLayout/>}></Route>
          <Route path='/htmltutorial/htmlAttributes' element={<HtmlAttributes/>}></Route>
          <Route path='/htmltutorial/htmlBlock&Inline' element={<HtmlBlockInline/>}></Route>
          <Route path='/htmltutorial/htmlCharset' element={<HtmlCharset/>}></Route>
          <Route path='/htmltutorial/htmlClasses' element={<HtmlClasses/>}></Route>
          <Route path='/htmltutorial/htmlColors' element={<HtmlColors/>}></Route>
          <Route path='/htmltutorial/htmlComments' element={<HtmlComments/>}></Route>
          <Route path='/htmltutorial/htmlCSS' element={<HtmlCSS/>}></Route>
          <Route path='/htmltutorial/htmlElements' element={<HtmlElements/>}></Route>
          <Route path='/htmltutorial/htmlEmojis' element={<HtmlEmojis/>}></Route>
          <Route path='/htmltutorial/htmlEntities' element={<HtmlEntities/>}></Route>
          <Route path='/htmltutorial/htmlFavicon' element={<HtmlFavicon/>}></Route>
          <Route path='/htmltutorial/htmlFilePaths' element={<HtmlFilePaths/>}></Route>
          <Route path='/htmltutorial/htmlFormatting' element={<HtmlFormatting/>}></Route>
          <Route path='/htmltutorial/htmlHead' element={<HtmlHead/>}></Route>
          <Route path='/htmltutorial/htmlHeadings' element={<HtmlHeadings/>}></Route>
          <Route path='/htmltutorial/htmlId' element={<HtmlId/>}></Route>
          <Route path='/htmltutorial/htmlIframes' element={<HtmlIframes/>}></Route>
          <Route path='/htmltutorial/htmlImages' element={<HtmlImages/>}></Route>
          <Route path='/htmltutorial/htmlJavascript' element={<HtmlJavascript/>}></Route>
          <Route path='/htmltutorial/htmlLinks' element={<HtmlLinks/>}></Route>
          <Route path='/htmltutorial/htmlList' element={<HtmlList/>}></Route>
          <Route path='/htmltutorial/htmlPageTitle' element={<HtmlPageTitle/>}></Route>
          <Route path='/htmltutorial/htmlParagraphs' element={<HtmlParagraphs/>}></Route>
          <Route path='/htmltutorial/htmlQuotations' element={<HtmlQuotations/>}></Route>
          <Route path='/htmltutorial/htmlStyleGuide' element={<HtmlStyleGuide/>}></Route>
          <Route path='/htmltutorial/htmlStyles' element={<HtmlStyles/>}></Route>
          <Route path='/htmltutorial/htmlSymbols' element={<HtmlSymbols/>}></Route>
          <Route path='/htmltutorial/htmlTables' element={<HtmlTables/>}></Route>
          </Route>
        
          {/***************************************html section end*******************************************/}

          {/*****************************************Mobile Menu**********************************************/}
          {/* <Route path='/mobileMenu' element={<MobileMenu/>}>

          </Route> */}
          <Route path='/csstutorial' element={<CSS/>}/>
          <Route path='/bootstrap' element={<Bootstrap/>}></Route>
          <Route path='/w3.css' element={<W3CSS/>}></Route>
          <Route path='/sass' element={<Sass/>}></Route>
          <Route path='/colors' element={<Colors/>}></Route>
          <Route path='/icons' element={<Icons/>}></Route>
          <Route path='/svg' element={<SVG/>}></Route>
          <Route path='/canvas' element={<Canvas/>}></Route>
          <Route path='/graphics' element={<Graphics/>}></Route>

          {/********************************js tutorials*********************************/}
          <Route path='/ajax' element={<AJAX/>}></Route>
          <Route path='/angularjs' element={<AngularJS/>}></Route>
          <Route path='/appml' element={<AppML/>}></Route>
          <Route path='/javascript' element={<Javascript/>}></Route>
          <Route path='/jquery' element={<JQuery/>}></Route>
          <Route path='/json' element={<JSON/>}></Route>
          <Route path='/react' element={<Reactjs/>}></Route>
          <Route path='/vue' element={<Vue/>}></Route>
          <Route path='/w3.js' element={<W3JS/>}></Route>
          <Route path='/htmlLog' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/tutorialslist' element={<TutorialsList/>}></Route>
         
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
        
      
      </BrowserRouter>
      
    
      
      
    </>
  );
}

export default App;
