import { confisAxios } from "../config-http"

export const register = async (user: any) => {
    const response = await confisAxios.post("/auth/register", user)
    return response.data
}