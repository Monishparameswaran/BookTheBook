import React from "react";
import { Link } from "react-router-dom";
import MyCart from "./MyCart";

export function SideBar({setPickData}){

    const menu=[
        {id:1,genre: "Historicals"},
        {id:2,genre: "Adventures"},
        {id:3,genre: "Fictions"},
        {id:4,genre: "Mysteries"},
        {id:5,genre: "Auto-Biographies"},
        {id:6,genre: "Comics"}
    ]

    const listItems=menu.map((data)=>(
        
          <ul className="m-4 cursor-pointer h-8 w-fit pt-1 pb-4 pl-8 pr-8 rounded-lg hover:bg-emerald-50 hover:"  onClick={()=>{setPickData(data.genre)}}>
            <li key={data.id}>{data.genre}</li>
          </ul>
        
    ));
    return (
        <div className="mb-0 w-56 bg-rose-300 -mt-48  shadow-2xl">
            <div className="flex flex-col justify-between items-center mt-8">
            {listItems}
            <Link to="/mycart">
            <div className="mt-12 "><button className="p-4 pl-8 pr-8 bg-black rounded-full text-white  w-full">My Book Shelf</button></div>
            </Link>
            </div>
           
        </div>
    )
}