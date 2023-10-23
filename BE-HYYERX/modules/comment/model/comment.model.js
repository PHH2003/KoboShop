import mongoose from "mongoose";

const commentSchema = mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: "Auth"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    comment: String
},
    {
        timestamps: true
    }
)

export default mongoose.model("Comment", commentSchema)