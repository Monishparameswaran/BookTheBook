import React from "react";
import ShowResults from "./ShowResults";
import { useState } from "react";
import { ImageCarousal } from "./ImageCarousal";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
import TopicPicks from "./TopicPicks";
import { SideBar } from "./SideBar";
import { useEffect } from "react";
export default function InputBox({content,setContent,autocomplete,setAutoComplete,setIsShowRecommendation,startIndex,setStartIndex,setSearchContent}){
    const [fieldData,setFieldData]=useState("");// this temperarily stores the  input box data
    let timeout;
    const [pickData,setPickData]=useState("stories");
    console.log(startIndex+"from effect");
     // the following is the debouncing logic which call the function at  a delay if it encounters another function call within that time the timeout is reset 

     
    const useDebounce=(e)=>{
        clearTimeout(timeout);
        timeout=setTimeout(()=>{handleChange(e)},300);
    }
    
    
    function handleChange(e){
        console.log(e.target.value);
        setFieldData(e.target.value);
        const url=`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&startIndex=0&maxResults=30`
        fetch(url)
        .then((resp)=>{
            resp.json().then(
                (data)=>{
                //   console.log(data.items[0].volumeInfo.title);
                 
                  setAutoComplete([]); // making sure all the previous data is cleared
                //   setContent([]);
                  data.items.map((item)=>{
                    const obj={
                        id: item.id,
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors?.[0], // why ?  this ensures the element is present there
                        description: item.volumeInfo.description,
                        publishedDate: item.volumeInfo.publishedDate,
                        imgLink: item.volumeInfo.imageLinks?.smallThumbnail || "NO image link",
                        saleability: item.saleInfo?.saleability,
                        retailPrice: item.saleInfo?.retailPrice?.amount,
                        currency:  item.saleInfo?.retailPrice?.currencyCode,
                        buyLink: item.saleInfo?.buyLink,
                        rating: item.volumeInfo.readingModes?.averageRating
                      }
                    //   setContent(arr=> [...arr,obj]);
                    setAutoComplete(prevAutocomplete => [...prevAutocomplete, item.volumeInfo.title]);
                  });
                }
            );
        })
    }
   
    return (
        <div className="bg-rose-100">
            <div >
            <div className="bg-rose-300 flex  justify-between  shadow-2xl shadow-rose-300/50 ">
            <div className=" bg-rose-300 h-32 w-1/2 flex flex-1 flex-row min-w-96 items-end ml-24">
            <div className="bg-blue-400 h-32 w-32 -ml-10 mr-24 shadow-2xl" >
                <img src="./src/assets/Yellow and Pink Gradient Modern Technology Logo.png" alt="" onClick={()=>{}}/>
            </div>
            <div className="w-1/2 flex ">
                <input type="text" className="h-11 text-lg p-5  bg-grey mb-1 ml-4 w-full rounded-lg" placeholder="Search 130+ Million books" onChange={useDebounce}/>
                
                {/* */}
                <Link to={`/search?input=${fieldData}`}>
                <button className="bg-white not-italic text-white pb-2 p-3   -ml-14 hover:bg-rose-200 hover:rounded-3xl" o>

                    <img src="https://supersimple.dev/public/img/exercises/youtube/icons/search.svg" alt="" className="h-6 w-6 rounded-lg " onClick={async()=>{ await setStartIndex(0);setSearchContent([]);}}/>
                </button>
                </Link>
               

                <div > 
                {/* {isShow && <div className="bg-violet-400 ml-50 "><ShowResults content={content} /></div>} */}
                </div>
               
            </div>
             
            </div>
            <div className="bg-rose-300 p-4 text-lg">
                <Link to="/about">
                 
                  <button className="p-2 pl-6 pr-6 border-black border-2 text-black hover:bg-white rounded-lg hover:transition hover:duration-700">About</button>
                </Link>
            </div>
            <div className="bg-rose-300 p-4 text-lg">
              <Link to="https://github.com/Monishparameswaran" target="_blank">
              <button className="p-2 pl-6 pr-6 bg-black text-white border-2 hover:transition hover:duration-700 hover:bg-white  hover:text-black rounded-lg">Contact</button>
              </Link>
              
            </div>
            </div>
             
            <div className="ml-72  w-1/2 h-48 overflow-y-auto ">
           <SearchResults data={autocomplete} setSearchContent={setSearchContent}></SearchResults> 
             <div className="ml-72 mt-24 italic  text-lg">"Unlock the universe with the turn of a page."</div>
           </div>
           </div>
            {/* <div className="mt-0 bg-black" >
            <ImageCarousal />
            </div>
            */}
            <div className="flex">
              <SideBar setPickData={setPickData}></SideBar>
            <div className="flex-grow">
               
            <TopicPicks setContent={setContent} pickData={pickData}></TopicPicks>
            </div>
           
            </div>
            
        </div>
        
    );
    
}