import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongoose connected ${db.connection.host}`);
    } catch (error) {
        console.log(`error to connectDB ${error.message}`)
    }
}

export default connectDB
