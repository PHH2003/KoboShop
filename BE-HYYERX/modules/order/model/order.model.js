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
        default: 'Đang chờ duyệt',
        enum: ['Đang chờ duyệt', 'Đã nhận đơn', 'Đang giao hàng', 'Đã hoàn thành'],
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
            quantity: Number
        }
    ]
},

    {timestamps: true}
)

export default mongoose.model('Order', orderSchema)