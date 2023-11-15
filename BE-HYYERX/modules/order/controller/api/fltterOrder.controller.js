import catchAsync from "../../../../utils/catchAsync.js";
import { filterDataOrders } from "../../service/order.service.js";
import status from 'http-status'

const filterDataOrder = catchAsync(async(req,res)=>{
    const dataRes = await filterDataOrders(req.query)
    return res.status(status.OK).json(dataRes)
})
export default filterDataOrder