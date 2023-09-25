import catchAsync from "../../../../utils/catchAsync.js";
import { updateOrders } from "../../service/order.service.js";
import status from 'http-status'

const updateOrder = catchAsync(async(req,res)=> {
    await updateOrders(req)
    return res.status(status.OK).json(`Đã chuyển đổi trạng thái  ${req.body.orderStatus}`)
})

export default updateOrder