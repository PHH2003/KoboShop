import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import authModel from "../../model/auth.model.js";
import { logins } from "../../service/auth.service.js";

const login = catchAsync(async(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(status.BAD_REQUEST).json('Vui lòng nhập đầy đủ thông tin')
    }
    const checkEmail = await authModel.findOne({email:email})
    if(!checkEmail) {
        return res.status(status.BAD_REQUEST).json('email không tồn tại')
    }
    const {user, validPassword, accessToken} = await logins(req.body)
    if(!validPassword){
        return res.status(status.BAD_REQUEST).json('mật khẩu không tồn tại')

    }
    return res.status(status.OK).json({
        user,
        accessToken
    })
})

export default login