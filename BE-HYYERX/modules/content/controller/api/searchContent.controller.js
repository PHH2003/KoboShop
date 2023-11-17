import catchAsync from "../../../../utils/catchAsync.js";
import { sreachContents } from "../../service/content.service.js";
import status from 'http-status'

const sreachContent = catchAsync(async(req, res)=>{
    const content = await sreachContents(req)
    if(content.length == 0){
        return res.status(status.BAD_REQUEST).jso('Search keyword does not exist')
    }
    return res.status(status.OK).json(content)
})

export default sreachContent