import { confisAxios } from "../config-http"

export const register = async (user: any) => {
    const response = await confisAxios.post("/auth/register", user)
    return response.data
}

export const login = async (user: any) => {
    const response = await confisAxios.post("/auth/login", user)
    return response.data
}