import status from 'http-status';
import catchAsync from "../../../../utils/catchAsync.js";
import orderModel from '../../model/order.model.js';
import { deleteOrders } from '../../service/order.service.js';

const deleteOrder = catchAsync(async (req, res) => {
    const orderId = req.params.id;
    const order = await orderModel.findById(orderId);
    if (order) {
        const orderStatus = order.orderStatus;
        if (orderStatus == "Đang chờ duyệt") {
            await deleteOrders(req)
            return res.status(status.OK).json("huỷ thành công");
        }
        else {
            return res.status(status.NOT_FOUND).json("trạng thái này không được huỷ.");
        }

    }
});

export default deleteOrder;