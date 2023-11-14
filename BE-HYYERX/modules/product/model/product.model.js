import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    newPrice: Number,
    cost: Number,
    images: {
        type: Object,
        default:{},
    },
    description: String,
    author: String,
    quantity: Number,
    company: String,
    datePublish: String,
    size: String,
    categoryId: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },
        name: String
    }
},

    {timestamps: true}
)

export default mongoose.model('Product', productSchema)