import React from "react";
import { useState } from "react";
export default function AddToCartButton({addProduct,data}){
    const [cartStatus,setCardStatus]=useState(true);
    return (
        <>
            {(cartStatus)?<button className="bg-black p-5 rounded-xl ml-8 text-white font-medium" onClick={()=>{addProduct(JSON.stringify(data));setCardStatus(false);console.log(data);}}>Add to cart</button>:<button className="bg-white p-4 rounded-xl ml-8 text-black border-rose-500 border-2 font-medium" onClick={()=>{addProduct(JSON.stringify(data));console.log(data);}}>Added !</button>}
        </>
    )
}