import catchAsync from "../../../../utils/catchAsync.js";
import { getAllCart } from "../../service/cart.service.js";
import status from 'http-status'

const getAllProductToCart = catchAsync(async(req, res)=>{
    const carts = await getAllCart(req)
    return res.status(status.OK).json(carts)
})

export default getAllProductToCart