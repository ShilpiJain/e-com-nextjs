import mongoose from 'mongoose';

// const { Schema } = mongoose;


const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            unique: true,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {   timestemps :true }
)

const Users = mongoose.model.Users || mongoose.model("Users", postSchema)
export default Users;