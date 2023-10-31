import dotenv from "dotenv"
dotenv.config()

const config = {
    VnPay: {
        tmnCode: process.env.VNP_TMN_CODE,
        secret: process.env.VNP_HASH_SECRET,
        url: process.env.VNP_URL,
    }
}
export default config 