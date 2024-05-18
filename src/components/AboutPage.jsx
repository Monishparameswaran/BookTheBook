import React from "react";
import { Link } from "react-router-dom";
export default function About(){
    return(
        <div className="h-screen w-screen bg-rose-300 pl-10  grid ">
            
            
            {/* <div className=" bg-rose-300 h-32 w-full flex flex-1 flex-row min-w-96 items-end ml-2"></div>
            <div className="bg-blue-400 h-32 w-32">
                <img src="src/assets/Yellow and Pink Gradient Modern Technology Logo.png" alt="" />
            </div> */}
            <div className="mt-0"><img src="../src/assets/Yellow and Pink Gradient Modern Technology Logo.png" alt=""className="h-32 w-32 " /></div>
            <div className="h-4/5 w-full mt-10  bg-rose-200 flex justify-between ">
                <div>
                <div className="ml-0">  <h1 className="text-6xl text-black ml-2">Searching Made Easy</h1></div>
                <div className="bg-rose-100 lack h-96 rounded-lg ml-12 mt-8 w-full">
                    <h2 className="p-8 text-2xl ">Welcome Monks!!</h2>
                    <p className="p-8 text-lg " >Book The Book: A platform to search for books worldwide, find them, read them, and mediate on the book. If monks want to own an amazing copy of what you've read, just Book the Book</p>
                   
                    <Link to="/home">
                    <div className="grid place-items-center max-width-96">
                    
                    <button className="bg-rose-500 p-5 text-white rounded-full w-full hover:bg-rose-700 hover:text-white hover:duration-700">Search Books</button>
                    </div>
                        </Link>
                  
                </div>
                </div>
                
                <img src="../src/assets/BookCover.png" alt="" className="h-fit w-fit =" />
               
            </div>
           
        </div>
    )
}