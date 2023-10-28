import { confisAxios } from "~/app/api/config-http"

export const getAllOrder = async () => {
    return await confisAxios.get("/order")
}


export const deleteOrder = async (id: any) => {
    return await confisAxios.delete(`/order/delete/${id}`)
}