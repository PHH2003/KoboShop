import status from 'http-status'
import authModel from '../modules/auth/model/auth.model.js'
import jwt from 'jsonwebtoken'
const veryFileToken = async (req,res,next) => {
    try {
        const token = req.headers.authorization
        const accessToken = token.split(" ")[1]
        if(!token) {
            return res.status(status.BAD_REQUEST).json('Bạn chưa đăng nhập')   
        }
        const verifyToken = await jwt.verify(accessToken, process.env.SECRET_KEY)
        if(!verifyToken) {
            return res.status(status.BAD_REQUEST).json('Lỗi token không hợp lệ')
        }
        console.log(verifyToken);
        const user = await authModel.findOne({ _id: verifyToken._id})
        req.user = user // gán tào khoản đăng nhập được vào req.user
                        // lưu thông tin đăng nhập vào req.user 
        next()          // nếu thành công cho đi tiếp
    } catch (error) {
        return res.status(status.BAD_REQUEST).json('error')
    }
}

const checkRoleAdminAuthorization = (req,res,next) => {
    veryFileToken(req, res, ()=>{
        if(req.user.role == 'ADMIN'){
            next()
        }
        else {
            return res.status(status.BAD_REQUEST).json('Lỗi role')
        }
    })
}
export {veryFileToken, checkRoleAdminAuthorization}