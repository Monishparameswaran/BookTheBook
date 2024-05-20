import React, { Fragment } from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
export default function SignUp(){
    const [fullName,setFullName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [invalid,setInvalid]=useState(false);
    const [userExist,setUserExist]=useState(false);
    const [userCreation,setUserCreation]=useState(false);
    const [canPost,setCanPost]=useState(false);
    const [isLogin,setIsLogin]=useState(false);
    const [userFound,setUserFound]=useState(true);
    const [gate,setGate]=useState(false);
    const [logIn,setLogIn]=useState("Log In");
    const navigate=useNavigate();
        function handleSignUp(){
            const header={
                fullname: fullName,
                email: email,
                password: password
            }
            const url="http://localhost:3000/signin"
            axios.post(url,null,{headers: header}).then(    // takes URL,BODY,HEADER as an argument
            
                (obj)=>{setUserExist(false);
                    setInvalid(false);
                    setUserCreation(true);
                    console.log(obj.data);}
            ).catch((err)=>{console.log(err.response.data);
                const status=err.response.data.status;
                setUserExist(false);
                setInvalid(false);
                if(status==="401"){setUserExist(true);}
                else if(status==="501"){setInvalid(true);}
                console.log("something went wrong at handleSignup");
            })     // console.log(resp)
        }
        function handleLogIn(e){
            const url="http://localhost:3000/login"; //  this our backend url that accepts get request
            const header={
                email: email,
                password: password
            }
            axios.get(url,{headers: header}).then(
                (obj)=>{
                    setInvalid(false);
                    setUserFound(true);
                    setGate(false);
                    setLogIn("Log In");
                    console.log(obj.data.status);
                    const status=obj.data.status;
                    if(status=="200"){
                        console.log(obj.data.token);
                        const token=obj.data.token;
                        localStorage.setItem('token',token);
                        localStorage.setItem('userName',obj.data.username);
                        console.log("token is:" +localStorage.getItem('token'));
                        setGate(true);
                        setLogIn("Hold on,Logging In");
                        setTimeout(()=>{
                            navigate("/home");
                        },3000);
                    }
                }
            )
            .catch((err)=>{
                console.log(err.response.status);
                const status=err.response.status;
                setUserFound(true); // means "No userfound msg" will not be rendered onto the pagae
                setInvalid(false);
                if(status=='403'){
                    setUserFound(false); // 403 means user not found this is something use like a flag from backend to notify this info
                }
                else{
                    setInvalid(true); // again 501 means invalid data format
                }
               
            })
        }
    return (
        <Fragment>
           <div className="min-h-screen w-full bg-rose-300 flex items-center justify-center">
              {/* <div className="bg-rose-500 min-h-full w-full">
                <div className="bg-rose-300 h-full w-full mt-32">hello</div>
              </div> */}
               
              <div className="backdrop-blur-xl bg-rose-100 shadow-md rounded-lg h-screen w-2/3 flex items-center mt-8">
                 <div className="bg-green-500 min-h-48 w-56  ml-16 ">
                 <img src="../src/assets/Yellow and Pink Gradient Modern Technology Logo.png" className="h-48 w-48 rounded-2xl"></img>
                 </div>
        { !isLogin &&
                <div className="bg-white h-full  w-full pl-16 pt-16">
                    <div className=" h-full ">
                        <h1 className="font-mono font-family-Menlo text-xl font-bold subpixel-antialiased">Welcome Monks!</h1>
                        <h1>Nice to see you,Register to mediate on Books</h1>
                        <div className="flex-1 w-full">
                            <div className="m-6"><input type="text" className="w-2/3 p-4 rounded-xl border border-gray-500 hover:border-gray-300 font-light" placeholder="Full Name" onBlur={(e)=>{setFullName(e.target.value);console.log(e.target.value);}}/></div>
                            <div className="m-6"><input type="email" className="w-2/3 p-4 rounded-xl border border-gray-500 hover:border-gray-300 font-light" placeholder="Email" onBlur={(e)=>{setEmail(e.target.value);}}/></div>
                            <div className="m-6"><input type="password" className="w-2/3 p-4 rounded-xl border border-gray-500 hover:border-gray-300 font-light" placeholder="Password" onBlur={(e)=>{setPassword(e.target.value)}}/></div>

                            {invalid && <div className="m-5 text-red-600 ">Oh no, Monk! That data isn’t valid. Please revise.</div>}
                            {userExist && <div className="m-8 text-red-700 ">User already exist ! Please,Try log In</div>}
                            {userCreation && <div className="m-8 text-green-500 font-medium font-sans">Registered Successfully,Login to Continue !</div>}
                            <div><button className="bg-rose-500 p-4 rounded-xl w-2/3 ml-3 text-white hover:bg-rose-700" onClick={handleSignUp} >Sign up</button></div>

                       
                        </div>
                        <div className="flex items-center justify-center w-2/3 ml-4 mt-4"><div>Or</div></div> 
                
                        <div className="flex">
                            <p>Already have an account?</p>
                            <a  className="text-blue-500 ml-4 hover:cursor-pointer" onClick={()=>{setIsLogin(true);setUserFound(true);setGate(false);setLogIn("Log In");}}>Login</a>
                        </div>

                    </div>            
                 </div>}
                


                 {isLogin && 

                  <div className="bg-white h-full  w-full pl-16 pt-16">
                  <div className=" h-full ">
                  
                <div className="flex ml-48 mt-24">
                <h1 className="font-mono font-family-Menlo text-xl font-bold subpixel-antialiased ">Log In </h1>
                </div>
                  
                  <div className="m-6">
                    <input type="email" className="w-2/3 p-4 rounded-xl border border-gray-500 hover:border-gray-300 font-light" placeholder="Email" onBlur={(e)=>{setEmail(e.target.value);}}/>
                  </div>
                <div className="m-6">
                    <input type="password" className="w-2/3 p-4 rounded-xl border border-gray-500 hover:border-gray-300 font-light" placeholder="Password" onBlur={(e)=>{setPassword(e.target.value)}}/>
                </div>
                {invalid && <div className="m-5 text-red-600 ">Oh no, Monk! That data isn’t valid. Please revise</div>}
                {!userFound && <div className="m-5 text-red-600 ">Invalid UserName or Password</div>}
                {gate && <div className="m-5 text-green-600 ">Validation Success,Ready to meditate...</div>}
                <div>
                    <button className="bg-rose-500 p-4 rounded-xl w-2/3 ml-3 text-white hover:bg-rose-700" onClick={handleLogIn}>{logIn}</button>
                </div>
                <div className="mt-16"><h2>Dont have an Account? <a className="text-blue-400 hover:cursor-pointer " onClick={()=>{setIsLogin(false)}}>Sign Up</a></h2></div>
                </div>
                 </div>
                 }




              </div>
            </div> 
           
        
           
        </Fragment>
    )
}

{/* <div className="basis-1/4 mb-32 bg-rose-300 rounded">

</div>
<div className="h-screen w-full bg-gray-500 ">

</div> */}