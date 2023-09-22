import cartModel from "../model/cart.model.js"

export const addCart = async(dataBody) => {
    const productOrder = {
        product: dataBody.productId,
        quantityOrder: dataBody.quantityOrder
    }

    const cartUser = await cartModel.findOne({
        user: dataBody.userId
    })

    if(cartUser){
        const findProduct = cartUser.carts.find(
            (item)=> 
            String(item.product) === dataBody.productId && 
            item.quantityOrder.nameColor === dataBody.quantityOrder.nameColor &&
            item.quantityOrder.nameSize ===dataBody.quantityOrder.nameSize
        )
        if(findProduct){
            findProduct.quantityOrder.quantity = findProduct.quantityOrder.quantity + dataBody.quantityOrder.quantity
        }
        else{
            cartUser.carts.push(productOrder)
        }
        await cartUser.save()
    }
    else{
        const newDataCart = new cartModel({
            user: dataBody.userId
        })
        newDataCart.carts.push(productOrder)        
        
        await newDataCart.save()
    }
}

export const getAllCart = async(req)=>{
    const carts = await cartModel.findOne({
        user: req.user.id
    }).populate({
        path: 'carts',
        populate: {
            path: 'product'
        }
    })
    return carts
}

export const deleteProductCarts = async(dataBody)=> {
    const cart = await cartModel.findOne({
        user: dataBody.userId
    })
    const newCart = cart.carts.findIndex((itemIndex) => itemIndex._id == dataBody.productId)
    if(newCart > -1){
        cart.carts.splice(newCart, 1)
    }
    await cart.save()
}

export const updateProductCarts = async(dataBody) => {
    const userCart = await cartModel.findOne({
        user:dataBody.userId
    })
    if(userCart){
        const findProductEdit = userCart.carts.find((itemProduct) => itemProduct.product == dataBody.productId)
        findProductEdit.quantityOrder = dataBody.quantityOrder    
    }
    await userCart.save()
}