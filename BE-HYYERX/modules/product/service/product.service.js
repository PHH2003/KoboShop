import productModel from "../model/product.model.js"

export const createProducts = async(req) => {
    const  fileImg = req.file
    // const checkImage = fileImg.flatMap((item) => item.path)
    const product = await productModel.create({
        ...req.body,
        images: fileImg.path,
    })
    return product
}

export const getAllProducts = async()=>{
    const products = await productModel.find()
    return products
}

export const getOneProducts = async(req) => {
    const product = await productModel.findById(req.params.id)
    return product
}

export const deleteProducts = async(req) => {
    const product = await productModel.findByIdAndDelete(req.params.id)
    return product
}

export const updateProducts = async(req) => {
    const fileImg = req.file 
    // const checkImage = fileImg.flatMap((item)=>item.path)
    const product = await productModel.updateOne(
       {
        _id: req.params.id
       },
       {
        ...req.body,
        images: fileImg.path
       }
    )
    return product
}