const express=require('express');
const cors=require('cors');
const app=express();
const {schema}=require("./type");
const {User}=require("./db/user"); // importing the database mongoose model
const jwt=require('jsonwebtoken');
app.use(express.json());
app.use(cors());

const JWT_SECRET="monishParameswara124"
app.get("/home",function(req,res){
    res.json({msg: "hello monish"});
    
    console.log("hello");
});


function inputValidateMiddlewareSignin(req,res,next){
    let fullname=req.headers.fullname;

    let email=req.headers.email;
    let password=req.headers.password;
    console.log(fullname);
    console.log(email);
    console.log(password);
    let response=schema.safeParse({fullname,email,password});
    if(response.success){console.log("Valid input ");next();}
    else{
        console.log("Invalid data format");
        res.status(501).json({status: "501",msg: "invalid data format"});
        return;  
    }
}

function inputValidateMiddlewareLogin(req,res,next){
   
    let fullname="placeholderdata"
    let email=req.headers.email;
    let password=req.headers.password;
    console.log(fullname);
    console.log(email);
    console.log(password);
    let response=schema.safeParse({fullname,email,password});
    if(response.success){console.log("Valid input ");next();}
    else{
        console.log("Invalid data format");
        res.status(501).json({status: "501",msg: "invalid data format"});
        return;  
    }
}
app.post("/signin",inputValidateMiddlewareSignin,async function(req,res){
    let fullname=req.headers.fullname;

    let email=req.headers.email;
    let password=req.headers.password;
    
    try{
        const exist=await User.findOne({fullname,email,password});
        if(exist){
            res.status(401).json({status: "401",msg: "User already Exist"});
            return;
        }
        const newUser=await User.create({fullname,email,password});
        if(newUser){res.status(201).json({status: "201",msg: "User created successfull"});}
        else{
            res.status(502).json({msg: "Cannot store user data"});
        }
    }
    catch(error){
        console.log("Cannot connect to DB problem at Validate.js");
    }
});


app.get("/login",inputValidateMiddlewareLogin,async function(req,res){
    // const fullname=req.headers.fullname;
    const email=req.headers.email;
    const password=req.headers.password;
    
    const response=await User.findOne({email,password});
    console.log(response);
    if(!response){
        res.status(403).json({msg: "Invalid login credentials"});
    }else{
        const token=jwt.sign({email,password},JWT_SECRET);
        
        res.status(200).json({status: "200",username: response.fullname,mail: response.email,msg: "Welcome "+response.fullname,
    token: token});
    }
});
console.log("Server started at: 3000");
app.listen(3000);