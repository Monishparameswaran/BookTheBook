
import { useState } from "react"
export default function BuyNowButton({obj,totalPrice,setTotalPrice,currentPrice,setCurrentPrice,clicked,setClicked,setDiscount,discount}){   
    const [Booked,setBooked]=useState(false);
    return (
       <>
          {
            !Booked && <button className="p-3 pl-6 pr-5 bg-rose-500 text-white hover:bg-rose-700 mt-2" onClick={()=>{if(obj && obj.price && !Booked){
                setBooked(true);setTotalPrice(totalPrice+obj.price);setDiscount(discount+10);
            }}}>Buy Now</button>
        }
        {
            Booked && <button className="p-3 pl-6 pr-5 bg-white text-rose-500 font-bold border-2 border-rose-300 mt-2" onClick={()=>{if( Booked){
                setBooked(true);
            }}}>Booked!</button>
        }
       </>
       
    )
}