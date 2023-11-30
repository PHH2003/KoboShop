
import nodemailer from 'nodemailer'
import contactModel from '../model/contact.model.js'

export const createContacts = async (req) => {
    const contact = await contactModel.create({ ...req.body })
    return contact
}

export const getAllContacts = async () => {
    const contact = await contactModel.find()
    return contact
}

export const updateContacts = async (req) => {
    const id = req.params.id
    const contact = await contactModel.updateOne(
        {
            _id: id
        },
        {
            ...req.body
        }
    )
    return contact
}

export const deleteContacts = async (req) => {
    const contact = await contactModel.findByIdAndDelete(req.params.id)
    return contact
}

export const seenContacts = async (req) => {
    const { reqbody, id, topic } = req.body
    const data = await contactModel.findById(id)
    const toemail = data.email;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });

    const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <div>
            <p>Chào bạn,</p>
            <p>Cảm ơn bạn đã phản hồi lại cho KiKi Shop. Về vấn đề ${topic}, chúng tôi có phản hồi như sau:</p> 
            ${reqbody ? `<div style="margin-top: 20px; margin-button: 20px;">${reqbody}</div>` : ''}
            <p>Thân mến,</p>
            <p>HaiDang Shop.</p>
        </div>
    </div>
`;
    const info = await transporter.sendMail({
        from: '"KiKi Shop👻" <fptkiki@gmail.com>',
        to: toemail,
        subject: "Phản hồi liên hệ của bạn từ Admin KiKi Shop",
        html: emailContent
    });
    return info;

}
export const searchContact = async (req, res) => {
    const { email } = req.query;
    const searchRegex = new RegExp(email, "i");
    const contact = await contactModel.find({ email: searchRegex })
    return contact
}