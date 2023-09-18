import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: String
},
{timestamps: true}
)

export default mongoose.model('Category', categorySchema)