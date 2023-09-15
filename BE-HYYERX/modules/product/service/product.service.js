import productModel from "../model/product.model.js"

export const createProducts = async(req) => {
    const  fileImg = req.files
    // const listQuantityRemain = Array.from(req.body.listQuantityRemain)
    const checkImage = fileImg.flatMap((item) => item.path)
    const product = await productModel.create({
        ...req.body,
        images: checkImage,
        // listQuantityRemain
    })
    return product
}
