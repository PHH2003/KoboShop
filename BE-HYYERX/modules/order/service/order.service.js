import cartModel from "../../cart/model/cart.model.js"
import productModel from '../../product/model/product.model.js'
import orderModel from "../model/order.model.js"

export const addOrders = async(req) => {
    const listProductOrder = req.body.productOrder
    const userId = req.user.id
    const cartUser = await cartModel.findOne({
        user: req.user._id
    })
    
    if(cartUser) {
        const filterData = cartUser.carts.filter(
            (itemCart) => listProductOrder.filter(
                (itemListProduct) => itemListProduct.product === String(itemCart.product)
            ).length === 0
        )

        for(let index = 0; index < listProductOrder.length; index++) {
            const element = listProductOrder[index];
            const productOrder = element.quantity
            const productDetail = await productModel.findOne({
                _id: element.product
            })
            productDetail.quantity = productDetail.quantity - productOrder
            await productDetail.save()
        }

        cartUser.carts = filterData
        await cartUser.save()
    }
    const newOrder = await orderModel.create({
        user: userId,
        ...req.body
    })
    return newOrder
}

export const updateOrders = async(req) => {
    const {orderId, orderStatus} = req.body

    const order = await orderModel.findOne({
        _id: orderId
    })

    order.orderStatus = orderStatus
    await order.save()
}

export const getAllOrders = async(req) => {
    
        const orders = await orderModel.find({
            user: req.user.id,
        }).populate({
            path: 'productOrder',
            populate: {
                path: 'product',
            },
        })
        return orders  
}