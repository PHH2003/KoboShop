import catchAsync from "../../../../utils/catchAsync.js";
import { getProductByCategorys } from "../../service/product.service.js";
import status from 'http-status'

const getProductByCategory = catchAsync(async(req,res)=> {
    const product = await getProductByCategorys(req)
    return res.status(status.OK).json(product)
})
export default getProductByCategory