
/// Hey Monish to create a database in MongoDB  
// we need a library,here mongoose
// create a schema,what mongoose says not mongoDB for better organisation of data
// create a model  mongoose.model('User',userSchema);

const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:5how8HoKUEKibEUG@cluster0.pydstvs.mongodb.net/sellingapp');

const userSchema=new mongoose.Schema({   // constructor to create the new schema
    fullname: String,
    email: String,
    password: String
});

const User=mongoose.model('User',userSchema);// assigning the reference to the User const to prevent the accidental reassign of the refference of user

module.exports={
    User
}