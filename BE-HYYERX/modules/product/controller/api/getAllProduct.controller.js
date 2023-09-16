import catchAsync from "../../../../utils/catchAsync.js";
import { getAllProducts } from "../../service/product.service.js";
import status from 'http-status'

const getAllProduct = catchAsync(async(req,res) => {
    const products = await  getAllProducts()
    return res.status(status.OK).json(products)
})
export default getAllProduct