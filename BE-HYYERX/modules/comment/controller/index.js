import getComment from './api/getComment.controller.js';
import createComment from './api/createComment.controllder.js';
import deleteComment from './api/deleteComment.controller.js';
import getAllComment from './api/getAllComment.controller.js';
import updateComment from './api/updateComment.controller.js';
import searchComment from './api/searchComment.controller.js';
const commentController = {
    getComment,
    createComment,
    deleteComment,
    getAllComment,
    updateComment,
    searchComment
}

export default commentController