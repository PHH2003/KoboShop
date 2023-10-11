import register from "./api/register.controller.js"
import login from "./api/login.controller.js"
import getAllUser from "./api/getAllUser.controller.js"
import deleteUser from "./api/deleteUser.controller.js"
import updateUser from "./api/updateUser.controller.js"
const authController = {
    register,
    login,
    getAllUser,
    deleteUser,
    updateUser
}

export default authController