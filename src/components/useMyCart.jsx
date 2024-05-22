import { useState,useEffect } from "react";

export default function useMyCart(){
    // this is a customHook used to add the productid's to the localStorage and remove the product id's
    const [productDetails,setProductDetails]=useState({});
    const [isRemove,setIsRemove]=useState(false);

    useEffect(()=>{
        let data;
        if(localStorage.getItem("cart")){
            data=JSON.parse(localStorage.getItem("cart"));
        }
        
         // appending the current product details to arr
         if(!data){
            let arr=[productDetails]
            localStorage.setItem("cart",JSON.stringify(arr));}
        else if(!isRemove && data){ 
            let arr=[...data,productDetails];
            arr=arr.filter((obj)=>{if(obj && obj.id!=data.id){return true}else{return false;}});
            localStorage.setItem("cart",JSON.stringify(arr));}
        else if(data){
            const productId=productDetails.id;
            let val=data.filter((obj)=>{if(obj.id!=productId && obj.title!=productDetails.title){return true;}else{return false;}});
            localStorage.setItem("cart",JSON.stringify(val));
        }
       
    },[productDetails]);

    function addProduct(data){
        const value=JSON.parse(data); // as the data is not passing properly while passing as a object
        data=value;
        const details={
            id: data?.id,
            imgLink: data?.imgLink,
            title: data?.title,
            price: data?.retailPrice
        }
        
        setProductDetails(details);
        console.log(productDetails);
    }

    const removeProduct=(data)=>{
         setIsRemove(true);
         setProductDetails(data);
    };



    return [addProduct,removeProduct];
}