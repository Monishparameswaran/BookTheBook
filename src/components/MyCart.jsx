import { Fragment, useState,useEffect } from "react";
import IncrementAndDecrementer from "./IncrementAndDecrementer";
import { Link } from "react-router-dom";
export default function MyCart(){
    const [content,setContent]=useState([]);
    const [currentPrice,setCurrentPrice]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("cart"));
        
        setContent(data);
        console.log(content);
    },[])
    let listItems;
    if(content){
        listItems=content.map((obj)=>{
       
            return (
             <div className="h-72 w-64 bg-white">
                 {  obj.id && obj.title && obj.imgLink && obj.price &&
                     <div>
                     <div id={obj.id} className=" flex">
                     <img src={obj.imgLink} alt="" className="h-fit w-fit"/>
                     <div className="ml-3">
                     <div className="text-sm mt-3">
                     <h4><strong>Title:</strong> {obj.title.substring(0,10)}</h4>
                     <h4 className="text-sm mt-3" ><strong>Price: {obj.price}</strong></h4>
                     </div>
                     </div>
                     </div>
                     <div className="flex flex-row justify-between mt-4">
                         <IncrementAndDecrementer currentPrice={currentPrice} currentItem={totalItems} totalPrice={totalPrice} setCurrentPrice={setCurrentPrice} setCurrentItem={setTotalItems} setTotalPrice={setTotalPrice}></IncrementAndDecrementer>
                         <div className="inline ml-2"><button className="p-3 pl-6 pr-5 bg-rose-500 text-white hover:bg-rose-700 mt-2" onClick={()=>{if(obj && obj.price){
                         setCurrentPrice(obj.price);setTotalPrice(totalPrice+obj.price);setTotalItems(totalItems+1);
                     }}}>Buy Now</button></div>
                     </div>
                    
                  </div>
                 }
             </div>
            )
         
         });
    }
  
    return (
        <Fragment>
          {content && 
          <div className="bg-rose-300 min-h-screen max-w-screen flex justify-between overflow-y-axis">
                
          <div className="bg-rose-200 max-h-screen w-2/3 rounded-lg mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 ml-8 p-24 overflow-scroll scroll-smooth">
                  {listItems}
          </div>
          <div className="bg-rose-200 h-screen mt-24 flex-grow ml-4 ">
              <div className="flex ml-8 mt-16 ">
                  <div className="text-xl font-bold">Price Details</div>
              </div>
              <div className="ml-10 bg-white mt-3 h-96">
                  <div className="text-md font-small">Total Books: <span className="ml-24 ">{totalItems}</span></div>
                  <div className="text-md font-small">Current Price: <span className="ml-24">{currentPrice.toFixed(2)}</span></div>
                  <div className="text-md font-small">Total Price: <span className="ml-24">{totalPrice.toFixed(2)}</span></div>
              </div>
              
          </div>
      </div>
          }
          {
            !content && 
            <div className="bg-rose-300 min-h-screen max-w-screen flex justify-center items-center ">
                  <div className="text-black font-bold text-2xl ">Oh..., Your Book shelf is Empty,please add some books</div>
                  <div className="ml-8">
                  <Link to="/home">
                    <div className="grid place-items-center max-width-96">
                    
                    <button className="bg-rose-500 p-5 text-white rounded-full w-full hover:bg-rose-700 hover:text-white hover:duration-700">Search Books</button>
                    </div>
                        </Link>
                  </div>
                  
            </div>
          
          }
        </Fragment>
    )
}