import { confisAxios } from "~/app/api/config-http"


export const createUser = async (bodyRequest: any) => {
    return await confisAxios.post('/auth/register', bodyRequest)
}

export const getAllUser = async () => {
    return await confisAxios.get('/auth')
}
export const deleteUser = async (userId: any) => {
    return await confisAxios.delete("/auth" + userId)
}

export const changeUser = async (userId: any, bodyRequest: any) => {
    return await confisAxios.delete(`/auth/${userId}`, bodyRequest)
}


export const searchUser = async (nameUser: any) => {
    return await confisAxios.get(`/auth/user?name=${nameUser}`)
}