import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        minlength : 3
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    confirmPassword : {
        type : String,
        required : true,

    }
})

const User = mongoose.model("User",userSchema);
export default User

