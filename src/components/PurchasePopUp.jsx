import { Link } from "react-router-dom"

export default function PurchasePopUp({setPopUp}){
    

    return (
        <div className=" absolute w-full h-full z-40 bg-opacity-50 bg-black flex  justify-center">

            <div className="w-1/2 h-2/3 mt-32 flex justify-center bg-white  text-white ">
                
                <div>
                <h1 className="text-rose-500 mt-7 text-4xl font-bold">Booked The Books</h1>
                <div className="mt-4 flex justify-center">
                <div className="text-xl font-normal text-black ">Your Order placed <strong className="font-bold text-yellow-500">Successfully</strong></div>
                </div>
                <div className="flex justify-between mt-16">
                    <Link to="/home">
                    <button className="bg-rose-500 text-white p-4 rounded-md hover:bg-rose-600 ">Search Books</button>
                    </Link>
                  
                   
                    <button className="bg-black text-white p-4 rounded-md" onClick={()=>{setPopUp(false);}}>Continue Ordering</button>
                   
                   
                </div>
                 
                </div>
                
            </div>
        </div>
    )
}