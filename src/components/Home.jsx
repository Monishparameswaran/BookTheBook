import React from "react";
import { useDeferredValue, useState } from 'react'

// import InputBox from './components/InputBox'
// import SearchResults from './components/SearchResults'
import InputBox from "./InputBox";
import SearchResults from "./SearchResults";

export default function Home({content,setContent,startIndex,setStartIndex,searchContent,setSearchContent}){

  const [autoComplete,setAutocomplete]=useState([]);
  const [isShowRecommendation,setIsShowRecommendation]=useState(true);

  return (
    <div>
         <InputBox content={content} setContent={setContent} autocomplete={autoComplete} setAutoComplete={setAutocomplete} setIsShowRecommendation={setIsShowRecommendation} startIndex={startIndex} setStartIndex={setStartIndex} searchContent={searchContent} setSearchContent={setSearchContent}></InputBox>
    {/* <SearchResults data={autoComplete} isShowRecommendation={isShowRecommendation}></SearchResults> */}
    </div>
    
  )
   
}