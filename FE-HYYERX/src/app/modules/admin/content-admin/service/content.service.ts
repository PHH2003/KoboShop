import { confisAxios } from "~/app/api/config-http"

export const getAllContent = async () => {
    return await confisAxios.get('/content')
}

export const deleteContent = async (id: any) => {
    return await confisAxios.delete('/content/delete/' + id)
}

export const createContent = async (dataBody: any) => {
    return await confisAxios.post("/content/add", dataBody)
}

export const updateContent = async (id: any, data: any) => {
    return await confisAxios.put(`/content/update/${id}`, data)
}

export const searchContent = async (keywork: any) => {
    return await confisAxios.get(`/content/search?hidden=${keywork}`)
}