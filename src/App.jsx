import { useDeferredValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputBox from './components/InputBox'
import SearchResults from './components/SearchResults'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import BookTheBook from './components/BookTheBook'
import Home from './components/Home'
import ShowResults from './components/ShowResults'
import About from './components/AboutPage'
import SignUp from './components/Signup'
import MyCart from './components/MyCart'

function App() {
  const [text,setText]=useState(null); 
  
  const defferedText=useDeferredValue(text);
  const [content,setContent]=useState([]);
  const [searchContent,setSearchContent]=useState([]);
  const [startIndex,setStartIndex]=useState(0); // this is used in the results displaying page to introduce infinite scrollin
  return (
    <div>
     
    <Router>
      
      <Routes>
        <Route key="signup" path="/signup" element={<SignUp></SignUp>}></Route>
        <Route key="home" path='/home' element={<Home content={content} setContent={setContent} startIndex={startIndex} setStartIndex={setStartIndex} searchContent={searchContent} setSearchContent={setSearchContent}></Home>} ></Route>
        <Route key="bookthebook" path='/bookthebook' element={<BookTheBook data={searchContent} data1={content}></BookTheBook>} ></Route>
        <Route key="about" path="/about" element={<About></About>}></Route>
         <Route key="/search" path='/search' element={<ShowResults content={content}  setContent={setContent} startIndex={startIndex} setStartIndex={setStartIndex} searchContent={searchContent} setSearchContent={setSearchContent}></ShowResults >} ></Route>
         <Route key="about" path='/' element={<About></About>}></Route>

         <Route key="cart" path='/mycart' element={<MyCart></MyCart>}></Route>
      </Routes>
    </Router>
     
    </div>
  )
}

export default App
