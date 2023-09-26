import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    newPrice: Number,
    cost: Number,
    images: {
        type: Array,
        default: [],
    },
    description: String,
    author: String,
    quantity: Number,
    company: String,
    datePublish: String,
    size: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }
},

    {timestamps: true}
)

export default mongoose.model('Product', productSchema)