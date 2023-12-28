import { confisAxios } from "../config-http"

export const createContact = async (data: any) => {
    const response = await confisAxios.post("/contact/add", data)
    return response.data
}

export const sendContact = async (data: any) => {
    const response = await confisAxios.post("/contact/seencontact", data)
    return response.data
}