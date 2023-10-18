import { confisAxios } from "../config-http"

export const addProductToCart = async (data: any) => {
    const response = await confisAxios.post("/cart/add", data)
    return response.data
}

export const deleteProductToCart = async (id: any) => {
    const response = await confisAxios.delete(`/cart/delete/${id}`)
    return response.data
}

export const updateProductToCart = async (data: any) => {
    const response = await confisAxios.post("/cart/update", data)
    return response.data
}