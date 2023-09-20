import catchAsync from '../../../../utils/catchAsync.js'
import productModel from '../../../product/model/product.model.js'
import status from 'http-status'
import cartModel from '../../model/cart.model.js'
import { addCart } from '../../service/cart.service.js'
const addProductToCart = catchAsync(async(req,res)=>{
    const bodyData = {
        userId: req.user._id,
        productId: req.body.productId,
        quantityOrder: req.body.quantityOrder
    }

    const productLocalDB = await productModel.findOne({
        _id:bodyData.productId
    })
    const cartUser = await cartModel.findOne({
        user: bodyData.userId
    })

    const findObjectQuantity = productLocalDB?.listQuantityRemain?.find(
        (item)=>
        item.nameColer == bodyData.quantityOrder.nameColer && item.nameSize == bodyData.quantityOrder.nameSize
    )
    if(bodyData.quantityOrder.quantity > findObjectQuantity.quantity){
        return res.status(status.BAD_REQUEST).json('Bạn đã mua vượt quá số lượng')
    }
    if(cartUser){
        const findProduct = cartUser.carts.find(
            (item) =>
            String(item.product) == bodyData.productId && 
            item.quantityOrder.nameColer == bodyData.quantityOrder.nameColer &&
            item.quantityOrder.nameSize == bodyData.quantityOrder.nameSize
        )
        const findObjectWithQuantity = productLocalDB.listQuantityRemain.find(
            (item) => item.nameColer === bodyData.quantityOrder.nameColer && item.nameSize == bodyData.quantityOrder.nameSize
        )
        if(findProduct){
            if(findObjectWithQuantity){
                if(findObjectWithQuantity.quantity < bodyData.quantityOrder.quantity ||
                    findProduct.quantityOrder.quantity + bodyData.quantityOrder.quantity > findObjectWithQuantity.quantity){
                
                    return res.status(status.BAD_REQUEST).json('Bạn đã mua vượt quá số lượng')
                    
                }
            }
        }
        
    }
    await addCart(bodyData)
    return res.status(status.OK).json('Đã thêm sản phẩm vào giỏ hàng thành công')
 
})

export default addProductToCart