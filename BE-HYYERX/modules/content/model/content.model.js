import mongoose from "mongoose";
const contentSchema = mongoose.Schema({
    content: String,
    hidden: String
},
    {
        timestamps: true
    })
export default mongoose.model('Content', contentSchema)