import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        fullname:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
    {timestamps:true,}
)


const UserModel = mongoose.model("Users",UserSchema)

export default UserModel