import catchAsync from '../../../../utils/catchAsync.js'
import productModel from '../../../product/model/product.model.js'
import status from 'http-status'
import cartModel from '../../model/cart.model.js'
import { addCart } from '../../service/cart.service.js'
const addProductToCart = catchAsync(async(req,res)=>{
    const bodyData = {
        userId: req.user._id,
        productId: req.body.productId,
        quantity: req.body.quantity
    }

    const productLocalDB = await productModel.findOne({
        _id:bodyData.productId
    })
    const cartUser = await cartModel.findOne({
        user: bodyData.userId
    })

    if(bodyData.quantity > productLocalDB.quantity){
        return res.status(status.BAD_REQUEST).json('Bạn đã mua vượt quá số lượng')
    }
    if(cartUser){
        const findProduct = cartUser.carts.find(
            (item) =>
            String(item.product) == bodyData.productId
        )
        if(findProduct){
                if(productLocalDB.quantity < bodyData.quantity ||
                    findProduct.quantity + bodyData.quantity > productLocalDB.quantity){               
                    return res.status(status.BAD_REQUEST).json('Bạn đã mua vượt quá số lượng')                   
                }
        }        
    }
    await addCart(bodyData)
    return res.status(status.OK).json('Đã thêm sản phẩm vào giỏ hàng thành công') 
})

export default addProductToCart