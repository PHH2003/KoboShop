import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    topic: String,
    note: String
},
    {
        timestamps: true
    })
export default mongoose.model('Contact', contactSchema)