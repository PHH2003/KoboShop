import { confisAxios } from "../config-http"

export const createOrder = async (data: any) => {
    const response = await confisAxios.post("/order/add", data)
    return response.data
}

export const getAllOrderUser = async () => {
    const response = await confisAxios.get("/order")
    return response.data
}