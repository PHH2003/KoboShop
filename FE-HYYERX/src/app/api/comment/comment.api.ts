import { confisAxios } from "../config-http"

export const createComment = async (data: any) => {
    const response = await confisAxios.post("/comment/add", data)
    return response.data
}