import catchAsync from "../../../../utils/catchAsync.js";
import { getOneProducts } from "../../service/product.service.js";
import status from 'http-status'

const getOneProduct = catchAsync(async(req,res)=> {
    const product = await getOneProducts(req)
    return res.status(status.OK).json(product)
})
export default getOneProduct