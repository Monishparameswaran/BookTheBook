import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TopicPicks({setContent,pickData}){
    const [picks,setPicks]=useState([]);
    const [indexStart,setIndexStart]=useState(0);
    useEffect(()=>{setIndexStart(0)},[pickData])
    function getData(pickData){
      console.log(indexStart);
        const url=`https://www.googleapis.com/books/v1/volumes?q=${pickData}&startIndex=${indexStart}&maxResults=8`
        fetch(url)
        .then((resp)=>{
            resp.json().then(
                (data)=>{
                //   console.log(data.items[0].volumeInfo.title);
                 
                  if(indexStart==0)setPicks([]); // making sure all the previous data is cleared
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
    useEffect(()=>{getData(pickData);},[indexStart,pickData]);
    const list = (
        <div className="grid grid-cols-4 gap-7 ">
          {picks.map((item) => (
            <div className="grid place-items-center bg-white hover:bg-stone-100 rounded-lg hover:duration-100  hover:border-black hover:border-2  shadow-2xl shadow-blue-500/50">
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
            <div className="">
            {list}
            </div>
            <button className="bg-black text-white p-8" onClick={()=>{setIndexStart(indexStart+10)}}>Load More</button>
            </div>
           
            </>
        )
}