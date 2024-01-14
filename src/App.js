import React from "react";
import { useState } from "react";
import "./index.css";

const App =()=>{
    
    const[ans ,setans]=useState();

    let nums1;
    let nums2;
     return (
        <div>
            <div className="container">
               <div className="card">
                 <h1>React Calculator</h1>
                 <input type="number" placeholder="Num 1" 
                  onChange={(e)=>(nums1=parseFloat(e.target.value))}
                 />
                 <input type="number" placeholder="Num 2"
                 onChange={(e)=>(nums2=parseFloat(e.target.value))}
                  />
                <div className="btn">
                    <button onClick={()=>setans(nums1+nums2)}>+</button>
                    <button onClick={()=>setans(nums1-nums2)}>-</button>
                    <button onClick={()=>setans(nums1*nums2)}>*</button>
                    <button onClick={()=>setans(nums1/nums2)}>/</button>
                </div>
                 <div className="result">
                 <h2>{ans}</h2>
                 <h2 style={{ color: 'green', background: 'none' }}>Success</h2>

               </div>
                
            </div>
            </div> 
            
        </div>
     )
     setans('')
}
export default App;