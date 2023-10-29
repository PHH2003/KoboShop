import bcrypt from 'bcrypt'
import authModel from '../model/auth.model.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
export const registers = async(dataBody) => {
    const { password} = dataBody
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await authModel.create(
        {
            ...dataBody,
            password: hashPassword
        }
    )
    return user
}

export const logins = async(dataBody) => {
    const {email, password} = dataBody
    const user = await authModel.findOne({email:email})
    const validPassword = await bcrypt.compare(password, user.password)
    const accessToken = jwt.sign({_id:user._id}, process.env.SECRET_KEY,{ expiresIn: "5d" })
    return {
        user,
        validPassword,
        accessToken
    }
}

export const getAllUsers = async() => {
    const user = await authModel.find()
    return user
}

export const deleteUsers = async(req) => {
    const user = await authModel.findByIdAndDelete(req.params.id)
    return user
}

export const updateUsers = async(req) => {
    const { password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await authModel.updateOne(  
        { 
            _id: req.params.id,
            
        },
        {
            ...req.body,
            password: hashPassword
        }
    )
    return user
}

export const sendEmails = async(email)=> {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_APP,
          pass: process.env.EMAIL_APP_PASSWORD
        }
      });
      const info = await transporter.sendMail({
        from: '"Rakuten Kobo 👻" <hiepphdemo@gmail.com>', // sender address
        to: email, // list of receivers
        subject: `Xác nhận mật khẩu Rakuten Kobo cho tài khoản: ${email}`,
        html: `<b>Hello world?</b>`
      });
    return info
}
