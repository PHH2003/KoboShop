import { confisAxios } from "~/app/api/config-http"

export const getAllOrder = async () => {
    return await confisAxios.get("/order")
}

export const deleteOrder = async (id: any) => {
    return await confisAxios.delete(`/order/delete/${id}`)
}

export const filterDataOrderByStatus = async (typeOrder: any) => {
    return await confisAxios.get(`/order/filter-data-status?status=${typeOrder}`)
}

export const updateOrder = async (dataBody: any) => {
    return await confisAxios.post(`/order/update`, dataBody)
}