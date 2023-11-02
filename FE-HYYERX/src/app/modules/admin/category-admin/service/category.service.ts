import { confisAxios } from "~/app/api/config-http"

export const getAllCategory = async () => {
    return await confisAxios.get("/category")
}
export const createCategory = async (data: any) => {
    return await confisAxios.post("/category/add", data)
}

export const deleteCategory = async (id: any) => {
    return await confisAxios.delete(`/category/delete/${id}`)
}

export const updateCategory = async (id: any, data: any) => {
    return await confisAxios.put(`/category/update/${id}`, data)
}