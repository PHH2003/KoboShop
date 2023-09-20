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
        ) // Tìm thông tin máu và size giống với thông tin khách hàng mua hàng
        if(findProduct){
            findProduct.quantityOrder.quantity = findProduct.quantityOrder.quantity + dataBody.quantityOrder.quantity
        }
        else{
            // Nếu không tìm thấy findProduct có nghĩa là sản phẩm đó không có trong giỏ hàng => tạo 1 object sản phẩm mới vào trong giỏ hàng
            cartUser.carts.push(productOrder)
        }
        await cartUser.save() // Lưu lại
    }
    else{
        const newDataCart = new cartModel({
            user: dataBody.userId
        })
        // Nếu chưa có tài khoản thì lúc dki tài khoản mới sẽ tạo ra 1 giỏ hàng mới tương ứng với tài khoản mới đó
        newDataCart.carts.push(productOrder) // Giỏ hàng mới chưa có sản phẩm => lúc mua hàng sẽ thêm object mới luôn        
        
        await newDataCart.save() // Lưu lại
    }
}