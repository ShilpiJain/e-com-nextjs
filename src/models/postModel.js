import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
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
const Post = mongoose.model.Post || mongoose.model("Post", postSchema)
export default Post;