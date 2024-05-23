import { Fragment, useState,useEffect } from "react";
import IncrementAndDecrementer from "./IncrementAndDecrementer";
import { Link } from "react-router-dom";
import PurchasePopUp from "./PurchasePopUp";
export default function MyCart(){
    const [content,setContent]=useState([]);
    const [currentPrice,setCurrentPrice]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    const [clicked,setClicked]=useState(false);
    const [PopUp,setPopUp]=useState(false);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("cart"));
        
        setContent(data);
        console.log(content);
    },[])
    let listItems;
    if(content){
        listItems=content.map((obj)=>{
            if(!obj.title || !obj.imgLink ){return;}
            return (
             <div className="h-72 w-64 bg-white">
                 { 
                     <div>
                     <div id={obj.id} className=" flex">
                     <img src={obj.imgLink} alt="" className="h-fit w-fit"/>
                     <div className="ml-3">
                     <div className="text-sm mt-3">
                     <h4><strong>Title:</strong> {obj.title.substring(0,10)}</h4>
                     {(obj.price)? <h4 className="text-sm mt-3" ><strong>Price: {obj.price}</strong></h4>: <div className="mt-2"><strong>Not available</strong></div>}
                     </div>
                     </div>
                     </div>
                     {(obj.price)?
                       <div className="flex flex-row justify-between mt-4">
                       <IncrementAndDecrementer currentPrice={currentPrice} currentItem={totalItems} totalPrice={totalPrice} setCurrentPrice={setCurrentPrice} setCurrentItem={setTotalItems} setTotalPrice={setTotalPrice} clicked={clicked} setClicked={setClicked} ></IncrementAndDecrementer>
                       <div className="inline ml-2">
                      <button className="p-3 pl-6 pr-5 bg-rose-500 text-white hover:bg-rose-700 mt-2" onClick={()=>{if(obj && obj.price){
                       setCurrentPrice(obj.price);setTotalItems(totalItems+1);setClicked(true);
                   }}}>Buy Now</button></div>
                   </div>
                     : <div className="bg-black text-white p-3 mt-6 ">Out of Stock</div>
                      }
                    
                  </div>
                 }
             </div>
            )
         
         });
    }
  
    return (
        <Fragment>
            {PopUp && <div className=""><PurchasePopUp setPopUp={setPopUp}></PurchasePopUp></div>}
            {content && 
               <div className="white">
                <div className="bg-blue-400 h-32 w-32 ml-14 mr-24 shadow-2xl absolute " >
               <img src="../src/assets/Yellow and Pink Gradient Modern Technology Logo.png" alt=""/>
           </div>
           <div className="bg-white font-bold text-2xl p-3 align-center absolute ml-48 mt-20 rounded-xl underline">
               My Book Shelf
           </div>
               </div>
               
            }
          
          {content && 
          <div className="bg-rose-300 min-h-screen max-w-screen flex justify-between overflow-y-axis">
                
          <div className="bg-rose-200 max-h-screen w-2/3 rounded-lg mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 ml-8 p-24 overflow-scroll scroll-smooth">
                  {listItems}
          </div>
          <div className="bg-rose-200 h-screen mt-24 flex-grow ml-4 ">
              <div className="bg-white absolute ml-8 mt-16 rounded-3xl pr-4">
              <div className="flex ml-8 mt-16 ">
                  <div className="text-xl font-bold">Price Details</div>
              </div>
              <div className="ml-10 mt-3 h-96">
                  <div className="text-lg font-small m-4">Total Books: <span className="ml-32 ">{totalItems}</span></div>
                  <div className="text-lg font-small m-4">Current Price: <span className="ml-24">{'\u20B9'}{currentPrice.toFixed(2)}</span></div>
                  <div className="text-lg font-small m-4">Total Price: <span className="ml-28">{'\u20B9'}{totalPrice.toFixed(2)}</span></div>
                  <div className="text-lg font-small m-4">Discount: <span className="ml-32">{'\u20B9'}{totalPrice.toFixed(2)}</span></div>
                  <hr className="border-1 border-rose-900" />
                  <div className="text-lg font-small m-4">You Pay:  <span className="ml-32">{'\u20B9'}{totalPrice.toFixed(2)}</span></div>
                  <hr className="border-1 border-rose-900" />
                  <div>
                    <button className=" mt-8 p-4 pl-16 pr-16 bg-yellow-400 text-black font-semibold " onClick={()=>{setPopUp(true)}}>Place Order</button>
                  </div>
                  <div></div>
              </div>
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