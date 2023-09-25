import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    fullname: String,
    phoneNumber: String,
    city: String,
    district: String,
    commune: String,
    detailAddress: String,
    orderStatus: {
        type: String,
        default: 'WAIT_FOR_CONFIRMATION',
        enum: ['WAIT_FOR_CONFIRMATION', 'PROCESSING', 'TRANSPORTED', 'DELIVERED', 'CANCELED'],
    },
    user: {
        type: mongoose.Types.ObjectId,
        refs: "Auth",
    },
    productOrder: [
        {
            product: {
                type: mongoose.Types.ObjectId,
                refs:"Product"
            },
            quantityOrder: {
                type:Object
            }
        }
    ]
},

    {timestamps: true}
)

export default mongoose.model('Order', orderSchema)