import contentModel from "../model/content.model.js"

export const createContents = async(req) => {
    const content = await contentModel.create({
        ...req.body
    })
    return content
}

export const getAllContents = async()=>{
    const content = await contentModel.find()
    return content
}

export const deleteContents = async() =>{
    const content = await contentModel.findByIdAndDelete(req.params.id)
    return content
}

export const updateContents = async(req) => {
    const content = await contentModel.updateOne(
        {
            _id: req.params.id
        },
        {
            ...req.body
        }
    )
    return content
}

export const sreachContents = async(req) => {
    const { hidden } = req.query;
    const content = await contentModel.find({
        hidden: {
            $regex: '.*' + hidden + '.*',
            $options: 'i'
        }
    })
    return content
}