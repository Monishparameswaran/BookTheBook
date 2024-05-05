import React from "react";

export default function SearchResults({data}) {
    // this component is responsible for displaying the pop recommendeted book box while searching 

    // function handleClick(){
    //     console.log("i clicked");
    // }
    const listItems = data.map((data) => (
        <div className="font-normal hover:font-medium bg-gray-100 individual-recommendation-box">
            {data}
        </div>
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
