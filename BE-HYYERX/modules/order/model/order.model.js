import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    fullname: String,
    phoneNumber: String,
    city: String,
    district: String,
    commune: String,
    detailAddress: String,
    total: Number,
    orderStatus: {
        type: String,
        default: 'Đang chờ duyệt',
        enum: ['Đang chờ duyệt', 'Đã nhận đơn', 'Đang giao hàng', 'Đã hoàn thành', 'Đã huỷ'],
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Auth",
    },
    productOrder: [
        {
            product: {
                type: mongoose.Types.ObjectId,
                ref:"Product"
            },
            quantity: Number
        }
    ]
},

    {timestamps: true}
)

export default mongoose.model('Order', orderSchema)