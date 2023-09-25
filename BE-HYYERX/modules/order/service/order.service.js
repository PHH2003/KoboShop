import cartModel from "../../cart/model/cart.model.js"
import productModel from '../../product/model/product.model.js'
import orderModel from "../model/order.model.js"

export const addOrders = async(req) => {
    const listProductOrder = req.body.productOrder
    const cartUser = await cartModel.findOne({
        user: req.user._id
    })
    
    if(cartUser) {
        const filterData = cartUser.carts.filter(
            (itemCart) => listProductOrder.filter(
                (itemListProduct) => itemListProduct.product === String(itemCart.product)&&
                itemListProduct.quantityOrder.nameSize == itemCart.quantityOrder.nameSize &&
                itemListProduct.quantityOrder.nameColor == itemCart.quantityOrder.nameColor
            ).length === 0
        )

        for(let index = 0; index < listProductOrder.length; index++) {
            const element = listProductOrder[index];
            const productOrder = element.quantityOrder
            const productDetail = await productModel.findOne({
                _id: element.product
            })
            const findProduct = productDetail.listQuantityRemain.find(
                (item) => item.nameColor == productOrder.nameColor &&
                            item.nameSize == productOrder.nameSize
            )
            findProduct.quantity = findProduct.quantity - productOrder.quantity
            await productDetail.save()
        }

        cartUser.carts = filterData
        await cartUser.save()
    }
    const newOrder = await orderModel.create({
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