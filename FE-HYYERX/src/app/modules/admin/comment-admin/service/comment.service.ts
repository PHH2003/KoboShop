import { confisAxios } from "~/app/api/config-http"

export const getAllComment = async () => {
    return await confisAxios.get("/comment")
}
export const deleteComment = async (id: any) => {
    return await confisAxios.delete(`/comment/delete/${id}`)
}