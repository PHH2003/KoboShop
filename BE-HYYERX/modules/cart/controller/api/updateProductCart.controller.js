import catchAsync from "../../../../utils/catchAsync.js";
import productModel from "../../../product/model/product.model.js";
import status from "http-status";
import { updateProductCarts } from "../../service/cart.service.js";

const updateProductCart = catchAsync(async(req, res)=>{
    const dataBody = {
        userId: req.user._id,
        productId: req.body.productId,
        quantityOrder: req.body.quantityOrder
    }

    const productLocalDB = await productModel.findOne({
        _id: dataBody.productId
    })

    const productFindColorSize = productLocalDB?.listQuantityRemain?.find(
        (item) => item.nameSize == dataBody.quantityOrder.nameSize &&
                item.nameColor == dataBody.quantityOrder.nameColor
    )

    if(productFindColorSize.quantity<dataBody.quantityOrder.quantity){
        return res.status(status.BAD_REQUEST).json('Vượt quá số lượng')
    }
    
    await updateProductCarts(dataBody)
    return res.status(status.OK).json('Sửa giỏ hàng thành công')
})

export default updateProductCart