import { confisAxios } from "~/app/api/config-http"

export const getAllCategory = async () => {
    return await confisAxios.get("/category")
}