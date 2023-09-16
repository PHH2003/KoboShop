import createProduct from "./api/creacteProduct.controller.js"
import getAllProduct from "./api/getAllProduct.controller.js"
import getOneProduct from "./api/getOneProduct.controller.js"
import deleteProduct from "./api/deleteProduct.controller.js"
import updateProduct from "./api/updateProduct.controller.js"
const productController ={
    createProduct,
    getAllProduct,
    getOneProduct,
    deleteProduct,
    updateProduct
}
export default productController