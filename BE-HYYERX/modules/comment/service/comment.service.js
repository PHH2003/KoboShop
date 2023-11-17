import commentModel from "../model/comment.model.js";

export const createComments = async (data) => {
    const { userId, productId, comment, star } = data;
    const newComment = new commentModel({
        userId: userId,
        productId: productId,
        comment: comment,
        star: star
    });
    await newComment.save();
    return newComment
}

export const getComments = async (productId) => {
    const comments = await commentModel.find({ "productId._id": productId });
    await commentModel.populate(comments, { path: 'userId', model: 'Auth' });
    return comments;
}

export const deleteComments = async (req) => {
    const comment = await commentModel.findByIdAndDelete(req.params.id)
    return comment
}

export const getAllComments = async () => {
    const comments = await commentModel.find()
    .populate("productId")
    .populate("userId");
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

export const searchComments = async(req) =>{
    const { name } = req.query;

    const comments = await commentModel.find({
        "userId.name": {
            $regex: '.*' + name + '.*',
            $options: 'i'
        }
    });
    return comments
}