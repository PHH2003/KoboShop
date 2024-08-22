import { confisAxios } from "~/app/api/config-http"


export const getAllContact = async() => {
    return await confisAxios.get('/contact')
}

export const repContact = async(data:any) =>{
    return await confisAxios.post('/contact/seencontact',data)
}

export const createContact = async (data: any) => {
    return await confisAxios.post("/contact/add", data)
}

export const deleteContact = async (id: any) => {
    return await confisAxios.delete('/contact/delete/' + id)
}

export const updateContact = async ( supportId: any, data: any) => {
    return await confisAxios.put('/contact/update/' + supportId, data)

}

export const searchContact = async (data: any) => {
    return await confisAxios.get(`/contact/search?email=${data}`)
}