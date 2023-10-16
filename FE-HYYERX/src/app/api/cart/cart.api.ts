import { confisAxios } from "../config-http"

export const addProductToCart = async (data: any) => {
    const response = await confisAxios.post("/cart/add", data)
    return response.data
}