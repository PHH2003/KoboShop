import { confisAxios } from "../config-http"

export const register = async (user: any) => {
    const response = await confisAxios.post("/auth/register", user)
    return response.data
}

export const login = async (user: any) => {
    const response = await confisAxios.post("/auth/login", user)
    return response.data
}

export const getOneUserSystem = async (id: any) => {
    return await confisAxios.get(`/auth/${id}`)
}

export const sendEmail = async (data: any) => {
    const response = await confisAxios.post("/auth/sendEmail", data)
    return response.data
}

export const updateUser= async (id: any, data: any)=>{
    return await confisAxios.put(`/auth/update/${id}`,data)
}
