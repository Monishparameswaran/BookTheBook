import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TopicPicks({setContent}){
    const [picks,setPicks]=useState([]);
    function getData(){
        const url=`https://www.googleapis.com/books/v1/volumes?q=stories`
        fetch(url)
        .then((resp)=>{
            resp.json().then(
                (data)=>{
                //   console.log(data.items[0].volumeInfo.title);
                 
                  setPicks([]); // making sure all the previous data is cleared
                //   console.log(data);
                  data.items?.map((item)=>{
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
                      setPicks(picks=> [...picks,obj]);
                      setContent(picks=>[...picks,obj]);
                  });
                }
            );
        })
    }
    useEffect(()=>{getData();},[]);
    const list = (
        <div className="grid grid-cols-4 gap-7 ">
          {picks.map((item) => (
            <div key={item.id} className="grid place-items-center bg-white hover:bg-stone-100 rounded-lg hover:duration-200 hover:border-rose-300 hover:border-4">
              <div className="mb-3">
                <img src={item.imgLink} alt="" className="w-fit h-fit " />
                
              </div>
              <div>
              <h3>{item.author}</h3>
              </div>
              <div>
              <Link to={`/bookthebook?id=${item.id}`}>
                <div className="text underline underline-offset-8 capitalize md:uppercase italic hover:uppercase md:not-italic text-blue-500">
                   <button className="bg-black text-white p-4 mt-4 rounded-lg hover:duration-700 hover:bg-white hover:text-black hover:border-2 hover: border-black">More details</button>
                </div>
             </Link>
              </div>
            </div>
          ))}
        </div>
      );
        console.log(list);
        return (
            <>
            <div className="ml-16 mr-16">
            <h2 className="font-bold text-2xl mb-10">Top Picks for you</h2>
        
             {list}
            </div>
           
            </>
        )
}