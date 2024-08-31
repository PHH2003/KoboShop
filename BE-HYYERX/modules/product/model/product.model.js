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
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },
        name: String
    }
},

    {timestamps: true}
)
// Phương thức tĩnh để tìm kiếm theo category
productSchema.statics.findByCategory = function(categoryId) {
    return this.find({ 'categoryId._id': categoryId });
}
export default mongoose.model('Product', productSchema)