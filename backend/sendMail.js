const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "monish.devping@gmail.com",
      pass: "gvgf vbvm meyc ygyt "
    }
});
const options={
    from: "monish.devping@gmail.com",
    to: "monishparameshwaran@gmail.com",
    subject: "Hello From BookTheBook",
    text: "Greetings!!!",
    html: "<h1>OTP from BookTheBook</h1>"
}
// transporter.sendMail(options,function(err,info){
//     if(err){
//         console.log("Sorry cannot send mail,an error occurred!");
//     }else{
//         console.log(info);
//     }
// });

module.exports={
    transporter
}