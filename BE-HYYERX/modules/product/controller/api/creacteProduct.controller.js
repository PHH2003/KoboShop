import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { createProducts } from "../../service/product.service.js";

const createProduct = catchAsync(async(req,res)=>{
    // if(!req.body.categoryId){
    //     return res.status(status.BAD_REQUEST).json('Đang thiếu danh mục')
    // }
    const products = await createProducts(req)
    return res.status(status.OK).json(products)
})

export default createProduct