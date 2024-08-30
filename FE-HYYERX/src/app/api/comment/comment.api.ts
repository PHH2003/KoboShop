import { confisAxios } from "../config-http"

export const createComment = async (data: any) => {
    const response = await confisAxios.post("/comment/add", data)
    return response.data
}

export const getAllComment = async () => {
    const response = await confisAxios.get("/comment")
    return response.data
}

export const getCommentByProduct = async(id:any) => {
    const response = await confisAxios.get(`/comment/${id}`);
    return response.data
}