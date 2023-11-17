import createContent from "./api/createContent.controlle.js"
import getAllContent from "./api/getAllContent.controller.js"
import deleteContent from "./api/deleteContent.controller.js"
import updateContent from "./api/updateContent.controller.js"
import sreachContent from "./api/searchContent.controller.js"
const contentController = {
    createContent,
    getAllContent,
    deleteContent,
    updateContent,
    sreachContent
}

export default contentController