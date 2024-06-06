import React from "react"
import { Link,useNavigate } from "react-router-dom";

export default function DropDownUser({setUserName}){

    const navigate=useNavigate();
    let arr=["My Purchases","My Profile","About","Logout"];
    const lItems=arr.map((data)=>{
        return <ul onClick={(e)=>{
         if(e.target.innerText=='Logout'){
            localStorage.removeItem("userName");
            localStorage.removeItem("token");
            setUserName("");
         } 
         if(e.target.innerText=='My Purchases'){
            navigate('/mycart');
         } 
         if(e.target.innerText=='About'){
            navigate('/about');
         } 
        }}>
            <li className="hover:bg-slate-300 hover: rounded-lg hover: p-1" >{data}</li>
        </ul>
        
    });
    return (
        < >
            <div className="bg-white w-36 h-48 rounded-lg absolute">
                <div className="ml-3 absolute mt-4">
               
                   {lItems}
               
                </div>
               
            </div>
        </>
    )
}