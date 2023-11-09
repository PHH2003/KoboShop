import e from "express"
import categoryModel from "../model/category.model.js"

export const createCategorys = async(req) => {
    const category = await categoryModel.create(req.body)
    return category
} 

export const getAllCategorys = async() => {
    const categorys = await categoryModel.find()
    return categorys
}

export const getOneCategorys = async(req) => {
    const category = await categoryModel.findById(req.params.id)
    return category
}

export const deleteCategorys = async(req) => {
    const category = await categoryModel.findByIdAndDelete(req.params.id)
    return category
}

export const updateCategorys = async(req) => {
    const category = await categoryModel.updateOne(  
        { 
            _id: req.params.id,
            
        },
        {
            ...req.body
        }
    )
    return category
}

export const searchCategorys = async(req) =>{
    const {name} = req.query
    const category = await categoryModel.find({ 
        name: {
          $regex: '.*' + name + '.*',
          $options: 'i'
      }})
    return category
}