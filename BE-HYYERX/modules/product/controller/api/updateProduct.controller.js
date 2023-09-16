import catchAsync from "../../../../utils/catchAsync.js";
import { updateProducts } from "../../service/product.service.js";
import status from 'http-status'
const updateProduct = catchAsync(async(req,res)=> {
    const product = await updateProducts(req)
    return res.status(status.OK).json(product)
})
export default updateProduct