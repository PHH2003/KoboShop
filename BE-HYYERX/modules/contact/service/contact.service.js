import contactModel from "../model/contact.model.js"


export const createContacts = async(req) =>{

    const contact = await contactModel.create({...req.body})
    return contact

}