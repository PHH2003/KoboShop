import { confisAxios } from "~/app/api/config-http"


export const getAllProduct = async () => {
    return await confisAxios.get('/product')
}