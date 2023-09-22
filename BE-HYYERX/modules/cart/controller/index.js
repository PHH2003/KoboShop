import addProductToCart from './api/addProductToCart.controller.js';
import getAllProductToCart from './api/getAllProductToCart.controller.js';
import deleteProductCart from './api/deleteProductCart.controller.js';
import updateProductCart from './api/updateProductCart.controller.js';
const cartController = {
    addProductToCart,
    getAllProductToCart,
    deleteProductCart,
    updateProductCart
}

export default cartController