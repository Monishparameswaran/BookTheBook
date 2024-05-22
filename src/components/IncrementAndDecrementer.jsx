import { useState } from "react";
export default function IncrementAndDecrementer({currentPrice,currentItem,totalPrice,setCurrentPrice,setCurrentItem,setTotalPrice}){
    const [count,setCount]=useState(0);
    return (
        <div className="flex flex-row mt-4 ml-2">
                        <button className="bg-gray-300 w-8 rounded-full " onClick={()=>{setCount(count-1);setCurrentItem(currentItem-1);setTotalPrice(totalPrice-currentPrice)}}>-</button>
                        <input type="text" className="w-8 ml-1 mr-1 p-1 border-2 border-slate-300 "value={count} name="box1"/>
                        <button className="bg-gray-300 w-8 rounded-full" onClick={()=>{setCount(count+1);setCurrentItem(currentItem+1);setTotalPrice(totalPrice+currentPrice);}}>+</button>
        </div>
    )
}