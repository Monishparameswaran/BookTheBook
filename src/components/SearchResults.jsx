import React from "react";
import { Link } from "react-router-dom";
export default function SearchResults({data}) {
    // this component is responsible for displaying the pop recommendeted book box while searching 

    // function handleClick(){
    //     console.log("i clicked");
    // }
    const listItems = data.map((item) => (
        <Link to={`/search?input=${item}`}>
             <div className="font-normal hover:font-medium bg-gray-100 individual-recommendation-box" onClick={()=>{console.log("You will Achieve");}}>
            {item}
           
            </div>     
        </Link>
       
    ));  
    return (
        // <div>
        //      {/* {
        //     (isShowRecommendation)? <div className="search-result">
        //     {listItems} */}
            
        // </div> :null
        // }
        // </div>
        <div >
            {
                (listItems.length>0)?<div><h2 className="font-medium mt-2 mb-4">Related books</h2></div>:null
            }
            
        <div>
            {listItems}
        </div>
        </div>
        
       
       
    );
}
