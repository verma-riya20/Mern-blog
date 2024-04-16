import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        
    },
    content:{
        type: String,
        required: true,
        
    },
    title:{
        type: String,
        required: true,
        unique:true,

    },
    image:{
        type:String,
    default: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" 
    },
    category:{
        type:String,
        default:'uncategorized',
    },
    title:{
        type: String,
        required: true,
        unique:true,

},
},{timestamps:true}
)

const Post=mongoose.model('Post', userSchema)

export default Post;