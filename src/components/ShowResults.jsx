import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function LoadScreen(){
   
    return(
        <div className="ml-32 mt-3 w-4/5">
                <Skeleton count={16}  duration={1.5} height={50} borderRadius={100}  baseColor="pink"/> 
        </div>
    )
}
  

export default function ShowResults({content,startIndex,setStartIndex,setContent,searchContent,setSearchContent}){
    const [isLoading,setLoading]=useState(true);
    
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const inputData=searchParams.get('input'); // i m getting data from the URL about the fetch data


   

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[]);
    useEffect(()=>{
        console.log(inputData+" "+startIndex+"from sideeffects");
        const url=`https://www.googleapis.com/books/v1/volumes?q=${inputData}&startIndex=${startIndex}&maxResults=10`
        fetch(url)
        .then((resp)=>{
            resp.json().then(
                (data)=>{
                //   console.log(data.items[0].volumeInfo.title);
                 
                if(startIndex==0){setSearchContent([]); setContent([]);}
                  data.items.map((item)=>{
                    const obj={
                        id: item.id,
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors?.[0], // why ?  this ensures the element is present there
                        description: item.volumeInfo.description,
                        publishedDate: item.volumeInfo.publishedDate,
                        imgLink: item.volumeInfo.imageLinks?.smallThumbnail || "NO image link",
                        saleability: item.saleInfo?.saleability,
                        retailPrice: item.saleInfo?.retailPrice?.amount,
                        currency:  item.saleInfo?.retailPrice?.currencyCode,
                        buyLink: item.saleInfo?.buyLink,
                        rating: item.volumeInfo.readingModes?.averageRating
                      }
                      setSearchContent(arr=> [...arr,obj]);
                  });
                }
            );
        })
       },[startIndex])
    // this page is responsible for rendering the search content 
    function customRedirectPage({data}){
        // window.open(`/bookthebook?id=${id}`,"_blank");  this is not persisting the data
        // const contentString = JSON.stringify(content);
        // const encodedContent = encodeURIComponent(contentString);
        // window.open(`/bookthebook?id=${id}&autocomplete=${encodedContent}`, "_blank");
        
    }
    const listItems=searchContent.map((data)=>(
        data.title && data.author && data.imgLink && data.description && ( <div id={data.id} className="bg-stone-100 m-10 ml-32 book-results ">
                
        <img src={data.imgLink}  alt="book image" className="h-72 w-48" />

      
       <div className="book-results-summary">
           {/* <div><h1 style={{cursor: 'pointer'}}onClick={()=>{customRedirectPage(data)}}>{data.title}</h1></div> */}
           <Link to={`/bookthebook?id=${data.id}`}>

               <div className="text underline underline-offset-8 capitalize md:uppercase italic hover:uppercase md:not-italic text-blue-500">
               <h1>{data.title}</h1>
               </div>
           </Link>
           <div className="mt-5 mb-3"><h4 className="font-bold">Author:  {data.author} </h4></div>
           <div>
           <h5 className="font-medium">Description</h5>
           <p className="w-9/12">
               {data.description}
           </p>
           </div>
       </div>
</div>)
       
    ));
    return (
        <div className="bg-rose-100">
            <h1 className="ml-24 mt-8 text-lg font-medium">Search Results</h1>
            {isLoading && <LoadScreen></LoadScreen> }
            {!isLoading && listItems && <div>
                {listItems}
            </div> }
          

            <div className="flex justify-center mt-10 mb-8">
            <button onClick={()=>{setStartIndex(startIndex+20);console.log(startIndex);}} className="bg-black text-white p-8 rounded-lg hover:text-black hover:bg-white hover:transition hover:duration-700">Load more</button>
            </div>
        </div>
    )
}



// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { useTransition, animated } from 'react-spring';

// export default function ShowResults({content}) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay (e.g., fetching data)
//     const delay = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // 2000 milliseconds (2 seconds) delay

//     // Cleanup function to clear the timeout
//     return () => clearTimeout(delay);
//   }, []);

//   // Define transitions for loading screen animation
//   const transitions = useTransition(isLoading, null, {
//     from: { opacity: 1 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 500 }, // Duration of the animation
//   });
//   const listItems=content.map((data)=>(

//     <div id={data.id} className="book-results">
//             <img src={data.imgLink} style={{height: '302px',width: '218px'}} alt="book image" />
//             <div className="book-results-summary">
//                 {/* <div><h1 style={{cursor: 'pointer'}}onClick={()=>{customRedirectPage(data)}}>{data.title}</h1></div> */}
//                 <Link to={`/bookthebook?id=${data.id}`}>{data.title}</Link>
//                 <div><h4>Author: </h4>{data.author}</div>
//                 <div>
//                 <h5>Description</h5>
//                 <p>
//                     {data.description}
//                 </p>
//                 </div>
//             </div>
//     </div>
//     ));
//   return (
//     <>
//       {transitions.map(({ item, key, props }) =>
//         item ? (
//           <animated.div
//             key={key}
//             style={{
//               ...props,
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               zIndex: 9999, // Ensure it's on top of other elements
//             }}
//           >
//             <p>Loading...</p>
//           </animated.div>
//         ) : null
//       )}


//       {/* Your main content goes here */}
//       <div>
//             <h2>Results</h2>
//             <div>
//                 {listItems}
//             </div>
//         </div>
//     </>
//   );
// }
