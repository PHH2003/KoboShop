import { confisAxios } from "~/app/api/config-http"


export const createUser = async (bodyRequest: any) => {
    return await confisAxios.post('/auth/register', bodyRequest)
}

export const getAllUser = async () => {
    return await confisAxios.get('/auth')
}