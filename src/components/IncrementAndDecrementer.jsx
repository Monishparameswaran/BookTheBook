import { useState } from "react";
import BuyNowButton from "./BuyNowButton";
export default function IncrementAndDecrementer({currentPrice,currentItem,totalPrice,setCurrentPrice,setCurrentItem,setTotalPrice,obj,setDiscount,discount}){
    const [count,setCount]=useState(1);
    const [isDisabled,setIsDisabled]=useState(true);
    const [clicked,setClicked]=useState(true);
   
    return (
        <div className="flex flex-row">
             <div className="flex flex-row mt-4 ml-2">
                        <button className={`bg-gray-300 w-8 rounded-full`} onClick={()=>{if(count>0 ){setCount(count-1);setCurrentItem(currentItem-1);setCurrentPrice(obj.price);setTotalPrice(totalPrice-currentPrice);setDiscount(discount-6)}}}>-</button>
                        <input type="text" className="w-8 ml-1 mr-1 p-1 border-2 border-slate-300 "value={count} name="box1"/>
                        <button className="bg-gray-300 w-8 rounded-full" onClick={()=>{setCount(count+1);setCurrentItem(currentItem+1);setCurrentPrice(obj.price);setTotalPrice(totalPrice+(obj.price*count));console.log(totalPrice);setDiscount(discount+15)}}>+</button>
                       
            </div>
            <div className="inline ml-6">
                        <BuyNowButton totalPrice={totalPrice} obj={obj} setTotalPrice={setTotalPrice} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} clicked={clicked} setClicked={setClicked} discount={discount} setDiscount={setDiscount}></BuyNowButton>
                      </div>
        </div>
    )
}