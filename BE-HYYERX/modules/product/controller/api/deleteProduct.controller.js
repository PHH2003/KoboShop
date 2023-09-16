import catchAsync from "../../../../utils/catchAsync.js"
import { deleteProducts } from "../../service/product.service.js"
import status from 'http-status'
const deleteProduct = catchAsync(async(req,res)=> {
    const product = await deleteProducts(req)
    return res.status(status.OK).json(product)
})
export default deleteProduct