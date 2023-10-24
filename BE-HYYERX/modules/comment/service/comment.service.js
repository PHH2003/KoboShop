import commentModel from "../model/comment.model.js";

export const createComments = async (data) => {
    const { userId, productId, comment } = data;
    const newComment = new commentModel({
        user: userId,
        product: productId,
        comment: comment,
    });
    await newComment.save();
    return newComment
}

export const getComments = async (productId) => {
    const comments = await commentModel.find({ product: productId });
    await commentModel.populate(comments, { path: 'user', model: 'Auth' });
    return comments;
}