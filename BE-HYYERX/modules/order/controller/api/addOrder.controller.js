import catchAsync from '../../../../utils/catchAsync.js'
import { addOrders } from '../../service/order.service.js'
import status from 'http-status'

const addOrder = catchAsync(async(req,res) => {

    const order = await addOrders(req)
    return res.status(status.OK).json(order)

})

export default addOrder