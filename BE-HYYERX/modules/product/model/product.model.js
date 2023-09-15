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
    brand: String,
    listQuantityRemain: [
        {
            nameSize: String,
            nameColor: String,
            quantity: Number
        }
    ]
},
    {timestamps: true}
)

export default mongoose.model('Product', productSchema)