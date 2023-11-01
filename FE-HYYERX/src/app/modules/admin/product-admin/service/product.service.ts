import { confisAxios } from "~/app/api/config-http"


export const getAllProduct = async () => {
    return await confisAxios.get('/product')
}

export const createProduct = async (data:any) => {
    return await confisAxios.post('/product/add', data)
}

export const removeProduct = async (id:any) => {
    return await confisAxios.delete(`/product/delete/${id}`)
}