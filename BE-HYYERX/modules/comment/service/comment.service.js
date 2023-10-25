import commentModel from "../model/comment.model.js";

export const createComments = async (data) => {
    const { userId, productId, comment, star } = data;
    const newComment = new commentModel({
        user: userId,
        product: productId,
        comment: comment,
        star: star
    });
    await newComment.save();
    return newComment
}

export const getComments = async (productId) => {
    const comments = await commentModel.find({ product: productId });
    await commentModel.populate(comments, { path: 'user', model: 'Auth' });
    return comments;
}

export const deleteComments = async (req) => {
    const comment = await commentModel.findByIdAndDelete(req.params.id)
    return comment
}

export const getAllComments = async () => {
    const comments = await commentModel.find();
    await commentModel.populate(comments, { path: 'user', model: 'Auth' });
    await commentModel.populate(comments, { path: 'product', model: 'Product' });
    return comments;
}

export const updateComments = async (req) => {
    const comment = await commentModel.updateOne(
        {
            _id: req.params.id
        },
        {
            ...req.body
        }
    )
    return comment
}