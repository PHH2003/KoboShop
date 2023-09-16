import createCategory from "./api/createCategory.controller.js"
import getAllCategory from "./api/getAllCategory.controller.js"
import getOneCategory from "./api/getOneCategory.controller.js"
import deleteCategory from "./api/deleteCategory.controller.js"
import updateCategory from "./api/updateCategory.controller.js"
const categoryController = {
    createCategory,
    getAllCategory,
    getOneCategory,
    deleteCategory,
    updateCategory
}
export default categoryController