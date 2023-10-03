import register from "./api/register.controller.js"
import login from "./api/login.controller.js"
import getAllUser from "./api/getAllUser.controller.js"
const authController = {
    register,
    login,
    getAllUser
}

export default authController