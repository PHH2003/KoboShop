import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
},
    {
        timestamps: true
    })
export default mongoose.model('Contact', contactSchema)