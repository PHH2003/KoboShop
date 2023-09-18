import bcrypt from 'bcrypt'
import authModel from '../model/auth.model.js'
import jwt from 'jsonwebtoken'
export const registers = async(dataBody) => {
    const {email, password} = dataBody
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await authModel.create(
        {
            ...dataBody,
            email,
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