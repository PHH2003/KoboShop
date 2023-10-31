import { confisAxios } from "../config-http"

export const createOrder = async (data: any) => {
    const response = await confisAxios.post("/order/add", data)
    return response.data
}


export const deleteOrder = async (id:any) => {
    const response = await confisAxios.delete(`/order/delete/${id}`)
    return response.data
}