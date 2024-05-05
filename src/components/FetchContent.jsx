import React from "react";
export default function FetchContent({searchData}){
       const [startIndex,setStartIndex]=useState(0);

       useEffect(()=>{
        const url=`https://www.googleapis.com/books/v1/volumes?q=${searchData}&startIndex=${startIndex}&maxResults=40`
        fetch(url)
        .then((resp)=>{
            resp.json().then(
                (data)=>{
                //   console.log(data.items[0].volumeInfo.title);
                 
                  
                  setContent([]);
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
                      setContent(arr=> [...arr,obj]);
                  });
                }
            );
        })
       },[searchData,startIndex])
}