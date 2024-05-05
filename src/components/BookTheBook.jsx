import React from "react";
import {redirect, useLocation} from 'react-router-dom'
export default function BookTheBook({data}){
    // const location=useLocation();
    // const searchParams=new URLSearchParams(location.search);
    // const id=searchParams.get('id');
    // const itemString=searchParams.get('autocomplete');
    // const item=JSON.parse(decodeURIComponent(itemString));
    // console.log("ths");

    // // const details=item.filter((element)=>(
    // //     element.id===id
    // // ));
    // console.log(item);
    const location = useLocation();

  // Extract the id parameter from the query string
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    // console.log(data);
    // console.log(id);

    const item=data.filter((item)=>{
        return item.id===id;
    });
    
    console.log(item);
    return (
        <>
        <div><h1 className="grid place-items-center capitalize bg-black text-white h-48 text-2xl hover:text-3xl">Own Your Book through 'Book The Book'</h1> </div>
        <div className="flex flex-row justify-between mt-10 bg-rose-300 ml-20">
            <div>

            </div>
            <div>
                <div className="flex flex-col">
                <div>
                <div className="mt-5 mb-3 "><h4 className="font-bold">Author:  {item[0].author} </h4></div>
                </div>
                <div>
                <h5 className="font-semibold">Description</h5>
                    <p className="w-96 mt-1">
                        {item[0].description}
                    </p>
                </div>

                <div>{
                (item[0].rating)?<h4 className="mt-2 mb-3 font-bold">Rating {item[0]?.rating}</h4>:null
                }</div>

           <div>{
              (item[0].retailPrice)? <h3 className="mt-10 font-bold">Price in Rupees: {item[0].retailPrice}</h3>:null
            }</div>

            <div>
                
                {
                    (item[0].buyLink)? <button className=" mt-8 bg-black text-white p-4 mb-10 hover:duration-1000 hover:text-black hover:bg-white booking-button" onClick={()=>{console.log(item[0].buyLink);window.open(item[0].buyLink, '_blank');
                }}>BookTheBook</button>: <button className="m-10 font-bold text-white bg-black p-6 grid place-items-center">Not For Sale!</button>
                }
                </div>
                
               
            </div>
            </div>
           <div>
           <div className="grid place-items-center">
            <img src={item[0].imgLink} alt="" className="h-96 w-72 mt-0" />
            </div>
           </div>
           <div>

           </div>
            {/* <p>
                Description: {item[0].description}
            </p>
            <h3>Author {item[0].author}</h3>
            <div>{
                (item[0].rating)?<h4>Rating {item[0]?.rating}</h4>:null
                }</div>

           <div>{
              (item[0].retailPrice)? <h3>Price $:{item[0].retailPrice}</h3>:null
            }</div>

            <div>
                
                {
                    (item[0].buyLink)? <button className="booking-button" onClick={()=>{console.log(item[0].buyLink);window.open(item[0].buyLink, '_blank');
                }}>BookTheBook</button>: <h3>Not For Sale!</h3>
                }
               
            </div> */}
        </div>
        </>
        
    )

}