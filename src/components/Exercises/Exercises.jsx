import React ,{useState,useEffect}from 'react';
import '../../components/Body/Style/style.css';
import { exerciseslist } from '../../Data/Exercises/ExercisesList'; 
import Footer from '../Body/Footer/Footer';
function exercisesdata(exerciseslist){
    return(
        <>
         <div className="col-3 m-4  align-self-center exercise-item item-self-strech"><h5>{exerciseslist.title}</h5></div>
        </>
    )
}

function Exercises() {
  
    const [searchData,setSearchData]=useState("");
     
    const searchItem = exerciseslist.filter((item)=>{
        if(searchData == ""){
            return item
        }
        else if(item.title.toLowerCase().includes(searchData.toLowerCase())){
            return item
        }
    })

    console.log(searchItem)
  return (
    <>
      <div className='container-fluid bg-black'>
        <div className="row py-4 align-items-center ">
        <div className="col searchbox justify-content-center"><input type="text"  placeholder='Search here............' onChange={(e)=>setSearchData(e.target.value)} /></div>
            
            
        </div>
      <div className="row row-cols-2  align-content-between justify-content-around">
        
       {searchItem.map(exercisesdata)}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Exercises;
