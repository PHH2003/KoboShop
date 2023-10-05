import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        default: "",
        unique: true,
    },
    password: {
        type: String,
        min: 6,
        require: true,
    },
    role: {
        type: String,
        default: 'USER'
    }
},
{
    timestamps: true
}
)

export default mongoose.model('Auth', authSchema)