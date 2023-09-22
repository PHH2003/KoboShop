import catchAsync from "../../../../utils/catchAsync.js";
import { deleteProductCarts } from "../../service/cart.service.js";
import status from 'http-status'

const deleteProductCart = catchAsync(async(req, res)=>{
    const bodyData = {
        userId: req.user.id,
        productId: req.params.productId
    }
    await deleteProductCarts(bodyData)
    return res.status(status.OK).json('Bạn đã xóa sản phẩm trong giỏ hàng thành công')
})

export default deleteProductCart