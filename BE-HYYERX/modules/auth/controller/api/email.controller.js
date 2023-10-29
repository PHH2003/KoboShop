import catchAsync from "../../../../utils/catchAsync.js"
import authModel from "../../model/auth.model.js"
import { sendEmails } from "../../service/auth.service.js"
import status from 'http-status'
const sendEmail = catchAsync(async(req,res)=> {
    const {email} = req.body
    const checkEmail = await authModel.findOne({email:email})
    if(!email){
        return res.status(status.BAD_REQUEST).json('Vui lòng nhập đầy đủ thông tin')
    }
    if(!checkEmail) {
        return res.status(status.BAD_REQUEST).json('Email không tồn tại trong hệ thống')
    }
    try {
        const {email} = req.body
        if(email){
            const reponse = await sendEmails(email)
            return res.status(status.OK).json(reponse)
        }
        return req.json({
            status: 'error',
            message:'The email is required'
        })
    }catch(err){
        console.log("TRANSPORTER ERROR MESSAGE: " + err.message);
    }
})
export default sendEmail